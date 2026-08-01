"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import CelebrationParticles from "../../../components/CelebrationParticles";

const traits = ["Commitment", "Teamwork", "Creativity"];

const useInViewCount = (ref, threshold = 0.4) => {
  const [enterCount, setEnterCount] = useState(0);
  const wasInViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        // نزود العداد بس لما يحصل انتقال من "مش ظاهر" لـ"ظاهر"
        if (isIntersecting && !wasInViewRef.current) {
          setEnterCount((prev) => prev + 1);
        }

        wasInViewRef.current = isIntersecting;
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return enterCount;
};

const BestMemberSpotlight = ({ member }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.4 });

  const enterCount = useInViewCount(cardRef, 0.4);

  // الأنيميشن يظهر بس لما يكون ده ثاني دخول بالظبط
  const active = enterCount === 2;


  return (
    <>
      <CelebrationParticles active={active} />

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative xl:sticky xl:top-24"
      >
      <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-amber-400/25 via-fuchsia-500/15 to-sky-400/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/30 bg-linear-to-br from-amber-500/10 via-slate-950/90 to-fuchsia-600/10 p-8 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_30%)]" />

        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-3 top-6 text-amber-300/70"
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute -left-2 bottom-24 text-fuchsia-300/70"
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>

        <div className="relative z-10 space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-400 via-yellow-300 to-orange-400 px-5 py-2 text-sm font-bold uppercase tracking-[0.28em] text-slate-950 shadow-lg shadow-amber-500/30"
          >
            <Trophy className="h-4 w-4" />
            Best Member
            <Trophy className="h-4 w-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-sm font-medium uppercase tracking-[0.35em] text-amber-200/80"
          >
            Congratulations
          </motion.p>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 120 }}
            className="relative mx-auto h-56 w-56"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-amber-400/40 via-fuchsia-500/20 to-sky-400/30 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-amber-300/50 bg-slate-900 shadow-[0_0_40px_rgba(251,191,36,0.35)] ring-4 ring-amber-400/20">
              <Image
                // src={member.photo}
                src="/"
                alt={member.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_45%)]" />
            </div>
          </motion.div>

          <div>
            <h3 className="bg-linear-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              {member.name}
            </h3>
            <p className="mt-2 text-amber-200/90">{member.title}</p>
          </div>

          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-200">
            {member.description}
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {traits.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="rounded-3xl bg-amber-400/10 px-4 py-2 text-sm text-amber-100 ring-1 ring-amber-300/25"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/80 to-transparent" />
      </div>
      </motion.div>
    </>
  );
};

export default BestMemberSpotlight;
