import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Cpu,
  Zap,
  Plug,
  Microchip,
  BatteryCharging,
  Box,
  Activity,
  Factory,
  Wrench,
  Code2,
} from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import TrackGallerySlider from "./TrackGallerySlider";

function LeadershipCard({ person, borderClass }) {
  let imagePos;
  if (person.name == "Belal El Bably") imagePos = "object-top";
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-800/80 p-6 shadow-lg">
      <div className="flex flex-col items-center gap-5 text-center">
        <div
          className={`relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 bg-slate-800 ${borderClass}`}
        >
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              fill
              className={`object-cover ${imagePos}`}
            />
          ) : (
            <User className="h-16 w-16 text-slate-500" strokeWidth={1.5} />
          )}
        </div>
        <div>
          <p className="text-lg font-semibold">{person.name}</p>
          <p className="text-sm text-slate-400">{person.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function TrackHubPage({ hub }) {
  const { accent, leadership, workshops } = hub;

  const workshopIcons = {
    micro: Cpu,
    automation: Zap,
    electronics: Plug,
    embedded: Microchip,
    "basic-electronics": BatteryCharging,
    solid: Box,
    ansys: Activity,
    mps: Factory,
    design: Wrench,
    cp: Code2,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
          <div
            className={`absolute left-10 top-10 h-40 w-40 rounded-full blur-3xl ${accent.orb1}`}
          />
          <div
            className={`absolute right-0 top-24 h-48 w-48 rounded-full blur-3xl ${accent.orb2}`}
          />
          <div
            className={`absolute left-1/2 top-40 h-32 w-32 rounded-full blur-3xl ${accent.orb3}`}
          />
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative mb-12 space-y-4 text-center">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-amber-300/40 to-transparent" />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              {hub.name} Track
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <span
                className={`bg-linear-to-r ${accent.gradient} bg-clip-text text-transparent`}
              >
                {hub.fullName}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 sm:text-lg">
              {hub.description}
            </p>
          </div>

          <div className="mb-16">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-bold text-white">Leadership</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <LeadershipCard
                  person={leadership.head}
                  borderClass="border-amber-400/30"
                />
                {leadership.viceHead && (
                  <LeadershipCard
                    person={leadership.viceHead}
                    borderClass="border-cyan-500/30"
                  />
                )}
                {leadership.viceHead2 && (
                  <LeadershipCard
                    person={leadership.viceHead2}
                    borderClass="border-cyan-500/30"
                  />
                )}
              </div>
            </div>
          </div>

          {hub.gallery?.length ? (
            <TrackGallerySlider images={hub.gallery} />
          ) : null}

          <div>
            <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
              Our Workshops
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workshops.map((workshop) => {
                const Icon = workshopIcons[workshop.slug] || Activity;
                return (
                  <Link
                    key={workshop.slug}
                    href={`/tracks/${workshop.slug}`}
                    className={`group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 ${accent.hoverBorder} hover:bg-slate-800/80 hover:shadow-xl`}
                  >
                    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                      <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        <div
                          style={{
                            clipPath:
                              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                          }}
                          className="flex h-40 w-40 items-center justify-center bg-slate-800/90 text-slate-100 shadow-lg ring-1 ring-white/10"
                        >
                          <Icon className="h-20 w-20" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{workshop.name}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{workshop.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
