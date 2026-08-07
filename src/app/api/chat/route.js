import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the official AI Assistant for IEEE Damietta Student Branch (IEEE DSB), located at Damietta University, Egypt.
Your goal is to answer visitor questions in English with a helpful, polite, professional, and engaging tone.

Key Information about IEEE Damietta Student Branch:
- About IEEE: IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for humanity.
- IEEE Damietta Student Branch: Official student branch at Damietta University, empowering students with technical skills, soft skills, and leadership opportunities.
- Vision: To be the leading student branch in Egypt, fostering innovation, engineering excellence, and future tech leaders.
- Mission: Bridging the gap between university education and technology industry demands through practical bootcamps, workshops, hackathons, and real-world projects.
- Technical Tracks & Committees: Embedded Systems & Robotics, Competitive Programming, UI/UX Design.
- Non-Technical Committees: Human Resources (HR), Public Relations (PR), Media & Marketing, Logistics & Event Management, Fundraising & Sponsorships.
- We have 3 societies RAS, PES, CS in our branch.
- Events & Bootcamps: Annual mega tech events, intensive seasonal bootcamps, coding competitions, soft-skills workshops, and career mentorship days.
- How to Join: Recruitment opens at the start of academic terms. Students can fill out the join form on our website or follow official social media channels.

Guidelines:
- Don't Answer to anything not related to IEEE Damietta Student Branch
- Keep answers concise, clear, and well-structured using Markdown (bullet points, bold highlights) also make it short as possible.
- Maintain an encouraging and welcoming atmosphere.
- Always answer in English unless the user explicitly speaks in another language.`;

// Store interaction chains per session (in-memory, resets on server restart)
const sessionInteractions = new Map();

export async function POST(req) {
  try {
    const { message, sessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey =
      process.env.NEXT_GEMINI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Build the interaction request
    const interactionConfig = {
      model: "gemini-3.5-flash-lite",
      input: message,
      system_instruction: SYSTEM_INSTRUCTION,
    };

    // Chain multi-turn conversations using previous_interaction_id
    const prevId = sessionInteractions.get(sessionId);
    if (prevId) {
      interactionConfig.previous_interaction_id = prevId;
    }

    const interaction = await ai.interactions.create(interactionConfig);

    // Store this interaction's ID for the next turn
    if (sessionId && interaction.id) {
      sessionInteractions.set(sessionId, interaction.id);
    }

    const reply = interaction.output_text;

    if (reply) {
      return NextResponse.json({ reply, success: true });
    }

    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Internal Server Error: " + error.message },
      { status: 500 }
    );
  }
}