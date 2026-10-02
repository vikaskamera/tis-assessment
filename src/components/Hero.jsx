import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contact } from "../data/content";

const lines = [["Let's", "do", "it"], ["with", "Tulas"]];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const farY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-pine text-[#EEF3F0]">
      {/* Himalayan ridgeline: the one parallax moment on the page */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[62%]">
        <motion.div style={reduce ? undefined : { y: sunY }} className="absolute right-[12%] top-[8%] h-28 w-28 rounded-full bg-accent sm:h-44 sm:w-44" />
        <motion.svg style={reduce ? undefined : { y: farY }} viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M0 220 L140 130 L250 190 L400 70 L560 200 L700 110 L860 210 L1020 90 L1180 190 L1320 120 L1440 180 V400 H0Z" fill="#1B5646" />
        </motion.svg>
        <motion.svg style={reduce ? undefined : { y: nearY }} viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M0 290 L180 210 L330 270 L520 170 L700 280 L900 190 L1100 280 L1260 220 L1440 270 V400 H0Z" fill="#0A2A23" />
        </motion.svg>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-40 sm:px-8">
        <h1 className="font-display font-extrabold leading-[0.92] tracking-tight text-[clamp(3.4rem,11.5vw,10.5rem)]">
          {lines.map((words, li) => (
            <span key={li} className="block overflow-hidden pb-[0.08em]">
              {words.map((w, wi) => (
                <motion.span
                  key={w + wi}
                  className="mr-[0.22em] inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + (li * 3 + wi) * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 grid gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed text-[#EEF3F0]/80">
            TIS is one of India’s top boarding and day schools in Dehradun. Our CBSE curriculum focuses on academic
            excellence, holistic development, and preparing students to be global leaders.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={contact.applyHref} className="rounded-full bg-accent px-7 py-3.5 font-bold text-pine transition-transform hover:scale-105">
              Apply now
            </a>
            <a href="#enquire" className="rounded-full border border-[#EEF3F0]/40 px-7 py-3.5 font-bold transition-colors hover:bg-[#EEF3F0]/10">
              Enquire now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
