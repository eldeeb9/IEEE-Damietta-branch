"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RefreshCw,
  Bot,
  User,
  ChevronDown,
  Zap,
  HelpCircle,
} from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Welcome to **IEEE Damietta Student Branch**! 👋 I'm your AI Assistant.\n\nAsk me anything about our technical tracks, workshops, events, or how to become a member!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  // Unique session ID for multi-turn conversation chaining
  const sessionIdRef = useRef(`session-${Date.now()}-${Math.random().toString(36).slice(2)}`);

  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "Tell me about IEEE Damietta 🚀",
    "What workshops & events do you host? 📅",
    "How can I join IEEE DSB? 🎓",
    "What technical tracks can I learn? 💻",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || input.trim();
    if (!query || isTyping) return;

    const userTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: userTime,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          sessionId: sessionIdRef.current,
        }),
      });

      const data = await response.json();

      const botMsg = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply || data.error || "Sorry, I couldn't process your request. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: "assistant",
          content: "⚠️ An error occurred while connecting to the assistant. Please check your internet connection.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },

      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    // Generate a new session ID to start a fresh conversation chain
    sessionIdRef.current = `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setMessages([
      {
        id: "welcome-1",
        role: "assistant",
        content:
          "Chat reset! Welcome back to **IEEE Damietta Student Branch**. How can I help you?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split("\n").map((line, i) => {
      let formatted = line;
      const isBullet = line.trim().startsWith("- ");
      if (isBullet) {
        formatted = line.trim().replace(/^-\s+/, "");
      }

      const parts = formatted.split(/(\*\*.*?\*\*)/g).map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-sky-300">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={index} className="bg-slate-800 text-sky-200 px-1.5 py-0.5 rounded text-xs font-mono">
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      });

      return (
        <p key={i} className={`min-h-[1.2em] ${isBullet ? "pl-4 relative before:content-['•'] before:absolute before:left-1 before:text-sky-400" : ""}`}>
          {parts}
        </p>
      );
    });
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="bg-slate-900/90 text-slate-200 text-xs px-3.5 py-2 rounded-full border border-sky-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>Ask IEEE AI</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle IEEE Chatbot"
          className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 border backdrop-blur-xl flex items-center justify-center ${
            isOpen
              ? "bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700"
              : "bg-gradient-to-r from-sky-600 to-blue-700 text-white border-sky-400/40 shadow-sky-500/25 hover:shadow-sky-500/40"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-500"></span>
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* CHAT WINDOW MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[80vh] flex flex-col rounded-2xl bg-slate-950/95 border border-slate-800/80 shadow-2xl backdrop-blur-2xl overflow-hidden font-sans text-slate-100"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-slate-900/90 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 p-0.5 shadow-md">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-sky-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm tracking-wide text-white">
                      IEEE Damietta AI
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset Conversation"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/70 transition"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/70 transition"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* MESSAGES CONTAINER */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-start gap-2.5 ${
                      isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        isUser
                          ? "bg-sky-600 text-white"
                          : "bg-slate-800 border border-slate-700 text-sky-400"
                      }`}
                    >
                      {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    <div className={`max-w-[82%] group flex flex-col ${isUser ? "items-end" : "items-start"}`}>
                      <div
                        className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          isUser
                            ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-tr-none shadow-md"
                            : "bg-slate-900 border border-slate-800/90 text-slate-200 rounded-tl-none shadow-sm"
                        }`}
                      >
                        {renderFormattedText(msg.content)}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* TYPING INDICATOR */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800/90 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </motion.div>
              )}

              {/* SUGGESTED PROMPTS */}
              {messages.length <= 2 && !isTyping && (
                <div className="pt-2">
                  <p className="text-[11px] text-slate-400 mb-2 flex items-center gap-1 font-medium">
                    <HelpCircle className="w-3 h-3 text-sky-400" />
                    Suggested questions:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestedPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-xs bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-300 px-3 py-1.5 rounded-lg border border-slate-800 transition text-left"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT FOOTER */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800/80 flex flex-col gap-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask IEEE Damietta AI..."
                  disabled={isTyping}
                  className="flex-1 bg-slate-950 border border-slate-800 focus:border-sky-500/60 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/50 transition disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-500 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
