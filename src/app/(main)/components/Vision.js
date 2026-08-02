"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const cardLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Vision = () => {
  return (
    <section className="section relative overflow-hidden py-24">
      <div className="container relative z-10">
        <div className="max-w-200 m-auto text-center">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-400">
            What drives us
          </p>
          <h1 className="section__header mb-12 text-slate-50">
            Our Vision & Mission
          </h1>

          <div className="grid gap-7.5 mt-7.5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] overflow-hidden">
            <motion.div
              variants={cardLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.35 }}
              className="rounded-[15px] border border-slate-400/15 bg-slate-800/55 p-7.5 text-center shadow-[0_12px_32px_-12px_rgba(8,47,73,0.6)] backdrop-blur-xl transition-colors duration-300 hover:border-sky-400/30"
            >
              <div className="m-auto mb-3.75 grid h-15 w-15 place-items-center rounded-full border border-sky-400/25 bg-sky-400/10">
                <Image
                  src="/images/icons/vision.png"
                  width={32}
                  height={32}
                  alt="vision"
                />
              </div>

              <h3 className="mb-3.75 text-2xl text-slate-50">Our Vision</h3>
              <h5 className="text-slate-400 leading-relaxed">
                To be the leading student branch in Egypt, empowering
                engineering students with technical skills and leadership
                opportunities.
              </h5>
            </motion.div>

            <motion.div
              variants={cardRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.35 }}
              className="rounded-[15px] border border-slate-400/15 bg-slate-800/55 p-7.5 text-center shadow-[0_12px_32px_-12px_rgba(8,47,73,0.6)] backdrop-blur-xl transition-colors duration-300 hover:border-sky-400/30"
            >
              <div className="m-auto mb-3.75 grid h-15 w-15 place-items-center rounded-full border border-sky-400/25 bg-sky-400/10">
                <Image
                  src="/images/icons/mission.png"
                  width={32}
                  height={32}
                  alt="mission"
                />
              </div>

              <h3 className="mb-3.75 text-2xl text-slate-50">Our Mission</h3>
              <h5 className="text-slate-400 leading-relaxed">
                To provide technical workshops, training opportunities, and
                international certificates to bridge the gap between academia
                and industry.
              </h5>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;