"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { Mail } from "lucide-react";

const MemberBox = ({
  name,
  role,
  photo,
  delay,
  memberDetails,
  customeImageClass = "",
}) => {

  let imagePos;
  if (name == "Youssef Abdelazeem") imagePos = "object-top";

  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: 60 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 0.5,
        //   ease: [0.22, 1, 0.36, 1],
        //   delay: delay,
        // }}
        // viewport={{ once: true, amount: 0.2 }}
        className="relative text-center flex-1 min-w-62.5 max-w-75 p-6 rounded-2xl bg-gradient-to-tl from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-950 hover:scale-105 shadow text-white overflow-hidden transition-all duration-300"
      >
        <p className="absolute top-0 left-0 bg-gray-200 text-ieee-primary py-2 px-4 rounded-br-3xl">
          {role}
        </p>
        <div className="h-56 w-56 m-auto flex justify-center items-center">
          <Image
            src={`/images/branch-members/${photo}`}
            alt={name}
            className={`rounded-full object-cover ${imagePos} w-full h-full ${customeImageClass} size-36!`}
            width={250}
            height={250}
          />
        </div>
        <div className="p-5">
          <h3 className="text-white mb-2.5 text-xl">{name}</h3>
          <p className="text-[#666] mb-3.5 text-[14px]">2025-2026</p>
        </div>
        <div className="flex item-center justify-center gap-3 mb-3">
          <a
            href={memberDetails.facebook}
            className="bg-gray-200 p-2 text-2xl rounded-full"
          >
            <FaFacebook className="text-[#1877F2] " />
          </a>
          <a
            href={`mailto:${memberDetails.email}`}
            className="bg-gray-200 p-2 text-2xl rounded-full"
          >
            <Mail className="text-red-500" />
          </a>
          <a
            href={memberDetails.linkedin}
            className="bg-gray-200 p-2 text-2xl rounded-full"
          >
            <FaLinkedin className="text-[#0077B5]" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default MemberBox;
