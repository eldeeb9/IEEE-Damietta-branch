"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    src: "/images/partners/Techne.svg",
    alt: "Techne",
    name: "Techne",
    link: "https://technesummit.com/",
  },
  {
    src: "/images/partners/pn-tech.jpeg",
    alt: "PN Tech",
    name: "PN Tech",
    link: "https://pn-tech.store/",
  },
];

const Partners = () => {
  return (
    <section className="section py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <h2 className="section__header">Our Partners</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto max-w-4xl md:max-w-2xl"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-7">
            {partners.map((partner) => (
              <a
                key={partner.alt}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="border border-white/15 rounded-2xl w-full max-w-xs sm:w-48 md:w-56 group flex flex-col items-center justify-center px-4 py-8 sm:py-6 sm:px-5 md:py-7 md:px-6 transition-colors duration-300 hover:border-white/25 hover:bg-white/5 cursor-pointer no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              >
                <div className="relative w-full h-28 sm:h-20 md:h-24">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain object-center transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 320px, 224px"
                  />
                </div>
                <span className="mt-4 sm:mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 group-hover:text-slate-500 transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
