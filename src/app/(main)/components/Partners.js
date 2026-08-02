"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  {
    src: "/images/partners/Techne.svg",
    alt: "Techne",
    name: "Techne",
    link: "https://technesummit.com/",
    color: "#3b82f6",
  },
  {
    src: "/images/partners/pn-tech.jpeg",
    alt: "PN Tech",
    name: "PN Tech",
    link: "https://pn-tech.store/",
    color: "#d4a017",
  },
  {
    src: "/images/partners/Worktopia.png",
    alt: "Worktopia",
    name: "Worktopia",
    link: "https://www.facebook.com/profile.php?id=61574901843396",
    color: "#eab308",
  },
  {
    src: "/images/partners/arcadia.png",
    alt: "Arcadia",
    name: "Arcadia",
    link: "https://www.facebook.com/ArcadiaSpace1/",
    color: "#92400e",
  },
];


const PartnerIntroBadge = () => (
  <div className="relative mx-auto mb-14 md:mb-16 h-28 w-full max-w-[340px] flex items-center justify-center">
    <svg
      viewBox="0 0 340 100"
      className="absolute inset-0 h-full w-full pointer-events-none"
      fill="none"
    >
      <path
        d="M12 78 C 70 20, 130 20, 158 50"
        stroke="#3b82f6"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="3 7"
        strokeLinecap="round"
      />
      <path
        d="M328 78 C 270 20, 210 20, 182 50"
        stroke="#3b82f6"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="3 7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="78" r="3" fill="#3b82f6" />
      <circle cx="328" cy="78" r="3" fill="#3b82f6" />
    </svg>

    <div className="relative z-10 flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full border border-blue-400/60 bg-[#0b1120] shadow-[0_0_45px_12px_rgba(59,130,246,0.3)]">
      <span className="text-blue-100/90">
        <Handshake />
      </span>
    </div>
  </div>
);

// إطار الكارت: بقى في طبقتين منفصلتين
// - الطبقة الخارجية (motion.svg) بتتحرك لقدام/لجوه عند الـ hover عشان تقرب من الكارت
// - الطبقة الداخلية ثابتة، هي شكل الكارت الأساسي
const OctagonFrame = ({ color }) => (
  <>
    <motion.svg
      viewBox="0 0 100 120"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      style={{ transformOrigin: "50% 50%" }}
      variants={{
        rest: { scale: 1, opacity: 0.45 },
        hover: { scale: 0.95, opacity: 0.9 },
        whileTap: { scale: 0.95, opacity: 0.9 },
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <polygon
        points="17,2 83,2 98,17 98,103 83,118 17,118 2,103 2,17"
        fill="none"
        stroke={color}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </motion.svg>

    <svg
      viewBox="0 0 100 120"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      <polygon
        points="21,7 79,7 93,21 93,99 79,113 21,113 7,99 7,21"
        fill="#0b1120"
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </>
);

const PartnerCard = ({ partner, index }) => {
  return (
    <motion.a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${partner.name}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover="hover"
      animate="rest"
      className="group relative block no-underline"
    >
      <OctagonFrame color={partner.color} />

      <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -4 },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 py-9 md:px-8 md:py-11"
      >
        <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-2xl">
          <Image
            src={partner.src}
            alt={partner.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80px, 96px"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-white">
            {partner.name}
          </span>
          <span
            className="h-[2px] w-8 rounded-full"
            style={{ backgroundColor: partner.color }}
          />
        </div>
      </motion.div>
    </motion.a>
  );
};

const Partners = () => {
  return (
    <section className="section py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-2"
        >
          <h2 className="section__header mb-8">Our Partners</h2>
        </motion.div>

        <PartnerIntroBadge />

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:gap-7 lg:max-w-5xl lg:grid-cols-4 lg:gap-8 px-4">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.alt} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;