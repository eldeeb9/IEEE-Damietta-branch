"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const CounterBox = ({ icon, alt, target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="rounded-[15px] border border-slate-400/15 bg-slate-800/55 p-7.5 text-center shadow-[0_12px_32px_-12px_rgba(8,47,73,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30"
    >
      <div className="m-auto mb-3.75 grid h-15 w-15 place-items-center rounded-full border border-sky-400/25 bg-sky-400/10">
        <Image src={icon} alt={alt} width={32} height={32} />
      </div>
      <h3 className="counter font-bold text-2xl text-slate-50">{count}+</h3>
      <p className="text-slate-400">{label}</p>
    </div>
  );
};

const Achievments = () => {
  return (
    <section className="section relative overflow-hidden  py-20">
      
      <div className="container relative z-10">
        <p className="mb-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-400">
          By the numbers
        </p>
        <h1 className="section__header text-center mb-12 text-slate-50">
          Our Achievements
        </h1>
        <div className="grid gap-5 mt-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <CounterBox
            icon="/images/icons/members.png"
            alt="members"
            target={350}
            label="Active Members"
          />
          <CounterBox
            icon="/images/icons/calendar.png"
            alt="calendar"
            target={5}
            label="Annual Events"
          />
          <CounterBox
            icon="/images/icons/awards.png"
            alt="awards"
            target={5}
            label="Local Awards"
          />
          <CounterBox
            icon="/images/icons/partners.png"
            alt="partners"
            target={8}
            label="Corporate Partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievments;