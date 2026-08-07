"use client";
import Image from "next/image";
import MemberBox from "./MemberBox";
import { useState } from "react";
import { Mail } from "lucide-react";

const Members = () => {
  const [openModalFor, setOpenModalFor] = useState(null);

  return (
    <section className="section relative" id="members">
      <div className="container">
        <div className="text-center mt-4 mb-16">
          <h1 className="section__header">Our Executive Committee</h1>
          <h5 className="section_description">
            Meet the team behind IEEE Damietta Student Branch
          </h5>
        </div>

        <section className="pb-12 w-full flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">
            Counselors
          </h2>

          <div className="grid w-full gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[32px] border bg-slate-800 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.45)]">
              <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:flex-row sm:items-center">
                <div className="slide-animation relative h-40 w-40 rounded-full border-4 border-[#d4af37] bg-slate-950 overflow-hidden shrink-0">
                  <Image
                    src="/images/branch-members/PHOTO-2026-07-10-20-14-41.jpg"
                    alt="Dr. Marwa Fayez"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300 sm:justify-start">
                    Counselor
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Dr. Marwa Fayez
                  </h3>
                  <a
                    href="mailto:marwa_areed@du.edu.eg"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-slate-100">
                      <Mail size={16} />
                    </div>
                    <span className="truncate">marwa_areed@du.edu.eg</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border bg-slate-800 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.35)]">
              <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:flex-row sm:items-center">
                <div className="slide-animation relative h-40 w-40 rounded-full border-4 border-slate-500 bg-slate-950 overflow-hidden shrink-0">
                  <Image
                    src="/images/branch-members/PHOTO-2026-07-30-21-41-43.jpg"
                    alt="Dr. Hadeer Helaly"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400 sm:justify-start">
                    Co-Counselor
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Dr. Hadeer Helaly
                  </h3>
                  <a
                    href="mailto:hadeerhelaly@du.edu.eg"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-slate-100">
                      <Mail size={16} />
                    </div>
                    <span className="truncate">hadeerhelaly@du.edu.eg</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center flex-wrap gap-4 relative">
          <MemberBox
            name="Adham Elnfarawy"
            role="Chairman"
            photo="photo_2026-03-12_05-00-13.jpg"
            delay={0}
            modal={openModalFor === "Adham Elnfarawy"}
            modalOnOpen={() => setOpenModalFor("Adham Elnfarawy")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Adham Elnfarawy",
              role: "Chairman",
              facebook: "https://www.facebook.com/share/1BEdUTg7Pc/",
              email: "adhamelnafarawy260@gmail.com",
              linkedin:
                "https://www.linkedin.com/in/adham-elnafarawy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            }}
          />

          <MemberBox
            name="Rovan Rashad"
            role="Vice Chair technical"
            photo="photo_2026-03-15_15-12-09.jpg"
            delay={0.15}
            modal={openModalFor === "Rovan Rashad"}
            modalOnOpen={() => setOpenModalFor("Rovan Rashad")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Rovan Rashad",
              role: "Vice Chair",
              facebook:
                "https://www.facebook.com/share/1DLzURQ9sK/?mibextid=wwXIfr",
              email: "Rovanrashad116@gmail.com",
              linkedin:
                "https://www.linkedin.com/in/rovan-rashad-196b7231a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
            }}
          />

          <MemberBox
            name="Basmala Elkhawaga"
            role="Vice Chair Non-technical"
            photo="photo_2026-03-15_15-12-32.jpg"
            delay={0.3}
            modal={openModalFor === "Basmala Elkhawaga"}
            modalOnOpen={() => setOpenModalFor("Basmala Elkhawaga")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Basmala Elkhawaga",
              role: "Vice Chair Non-technical",
              facebook:
                "https://www.facebook.com/share/1DT891zDJp/?mibextid=wwXIfr",
              email: "basmalaelkhawaga377@gmail.com",
              linkedin:
                "https://www.linkedin.com/in/basmala-khalid-76b2a9335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            }}
          />

          <MemberBox
            name="Omar Zaky"
            role="Secretary"
            photo="photo_2026-03-15_15-13-44.jpg"
            delay={0.45}
            modal={openModalFor === "Omar Zaky"}
            modalOnOpen={() => setOpenModalFor("Omar Zaky")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Omar Zaky",
              role: "Secretary",
              facebook: "https://www.facebook.com/omar.zaky.8039",
              email: "omarieee956@gmail.com",
              linkedin:
                "https://www.linkedin.com/in/omar-zaky-072674221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            }}
          />

          <MemberBox
            name="Youssef Abdelazeem"
            role="Treasurer"
            photo="PHOTO-2026-08-03-00-16-14.jpg"
            delay={0.6}
            modal={openModalFor === "Youssef Abdelazeem"}
            modalOnOpen={() => setOpenModalFor("Youssef Abdelazeem")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Youssef Abdelazeem",
              role: "Treasurer",
              facebook: "https://www.facebook.com/YoussefAbdelaziiim",
              email: "Youssef.abdelazim100@gmail.com",
              linkedin: "https://linkedin.com/in/youssef-mohamed10",
            }}
          />

          <MemberBox
            name="Nada Elhoseny"
            role="Treasurer"
            photo="photo_2026-03-15_15-12-25.jpg"
            delay={0.75}
            modal={openModalFor === "Nada Elhoseny"}
            modalOnOpen={() => setOpenModalFor("Nada Elhoseny")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Nada Elhoseny",
              role: "Treasurer",
              facebook:
                "https://www.facebook.com/profile.php?id=100025767703104",
              email: "nadaahmedmohamed8@gmail.com",
              linkedin:
                "https://www.linkedin.com/in/nada-elhoseny-8741a634b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            }}
          />

          <MemberBox
            name="Ahmed Eldeeb"
            role="Web Developer"
            photo="photo_2026-03-12_02-14-19.jpg"
            delay={0.9}
            modal={openModalFor === "Ahmed Eldeeb"}
            modalOnOpen={() => setOpenModalFor("Ahmed Eldeeb")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Ahmed Eldeeb",
              role: "Webmaster",
              facebook:
                "https://www.facebook.com/share/1bxSnFahJS/?mibextid=wwXIfr",
              email:
                "https://www.email.com/eldeeb_9?igsh=dWxlYWNnM3hzdHU2&utm_source=qr",
              linkedin: "https://www.linkedin.com/in/ahmed-eldeeb-696983370",
            }}
          />
          <MemberBox
            name="Ahmed Safwat"
            role="Web Developer"
            photo="PHOTO-2026-06-24-20-06-03.jpg"
            delay={1}
            modal={openModalFor === "Ahmed Safwat"}
            modalOnOpen={() => setOpenModalFor("Ahmed Safwat")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Ahmed Safwat",
              role: "Webmaster",
              facebook: "https://www.facebook.com/share/1DAPgXpjHL/",
              email: "https://www.email.com/insafwat/",
              linkedin: "https://www.linkedin.com/in/safwat96/",
            }}
            customeImageClass="object-top"
          />
          <MemberBox
            name="Mariam Farahat"
            role="UI/UX Designer"
            photo="PHOTO-2026-06-24-20-40-03.jpg"
            delay={1}
            modal={openModalFor === "Mariam Farahat"}
            modalOnOpen={() => setOpenModalFor("Mariam Farahat")}
            modalOnClose={() => setOpenModalFor(null)}
            memberDetails={{
              name: "Mariam Farahat",
              role: "UI/UX Designer",
              facebook: "https://www.facebook.com/share/1c4tm8ZTgK/",
              email:
                "https://www.email.com/mariam.farahat.756?igsh=NTZvYjUwZ2J1aTRj",
              linkedin: "https://www.linkedin.com/in/mariam-farahat/",
            }}
            customeImageClass="object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Members;
