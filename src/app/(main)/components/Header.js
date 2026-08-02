"use client";
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  // Bubble particles for the underwater/diving feel
  const bubbles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 8,
        drift: (Math.random() - 0.5) * 60,
      })),
    []
  );

  return (
    <section className="text-white flex justify-center items-center h-dvh bg-center bg-cover relative -mt-18.75 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="z-10 text-center p-2 w-full flex justify-center">
        <div className="flex items-center justify-center gap-6 h-36">
          <motion.div
            layout
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              layout: { duration: 0.8 },
              default: { duration: 0.7, ease: "easeOut" },
            }}
          >
            <Image
              src="/images/logo.jpg"
              className="rounded-full w-24 md:w-36"
              alt="IEEE Logo"
              width={150}
              height={150}
              priority
            />
          </motion.div>

          <AnimatePresence>
            {!isVisible && (
              <motion.div
                key="headline"
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.35 }}
                className="flex flex-col justify-center border-l-2 border-gray-300 px-4 py-4"
              >
                <span className="text-white font-bold text-3xl md:text-5xl leading-tight tracking-wide">
                  IEEE DSB
                </span>
                <span className="text-blue-400 font-medium text-sm md:text-xl tracking-wider uppercase">
                  Student Branch
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="z-10 absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-1">
          Scroll
        </span>

        
         <a href="#members"
          className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>

      {/* Animated Wave — fixed: no rotate, fill now correctly reaches the bottom edge */}
      {/* <div className="absolute bottom-0 left-0 w-full z-10 leading-[0]">
        <svg
          className="relative block w-full h-24 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            fill=""
            fillOpacity="1"
            animate={{
              d: [
                "M0,64 C300,120 900,0 1200,64 L1200,120 L0,120 Z",
                "M0,80 C300,20 900,110 1200,50 L1200,120 L0,120 Z",
                "M0,64 C300,120 900,0 1200,64 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div> */}
    </section>
  );
};

export default Header;