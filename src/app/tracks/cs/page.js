import React from "react";
import Image from "next/image";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BestMemberSpotlight from "../ras/components/BestMemberSpotlight";

const trackName = "Competitive programming";

const trackTeam = {
  instructor: {
    name: "Eng. Belal El Bably",
    title: "Head",
    photo: "/images/branch-members/belal.jpg",
  },
  bestMember: {
    name: "Ahmed Safwat",
    title: "Best Member",
    description: `The standout member of the ${trackName} track this season, excelling in execution, collaboration, and creativity.`,
    photo: "/images/branch-members/PHOTO-2026-06-24-20-40-03.jpg",
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-amber-400/25 blur-3xl" />
          <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-40 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative mb-12 space-y-4 text-center">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-amber-300/40 to-transparent" />
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-amber-200 via-white to-sky-200 bg-clip-text text-transparent">
                Meet the {trackName} Track Team
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 sm:text-lg">
              Discover the leadership, instructor, and technical support behind
              the {trackName} track — crowned by our celebratory best member
              highlight.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                <h2 className="mb-6 text-2xl font-bold text-white">Head</h2>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-800/80 p-6 shadow-lg">
                    <div className="flex flex-col items-center gap-5 text-center">
                      <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-amber-400/30 bg-slate-800">
                        <Image
                          src={trackTeam.instructor.photo}
                          alt={trackTeam.instructor.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">
                          {trackTeam.instructor.name}
                        </p>
                        <p className="text-sm text-slate-400">
                          {trackTeam.instructor.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BestMemberSpotlight member={trackTeam.bestMember} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default page;
