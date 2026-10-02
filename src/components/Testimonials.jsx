import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reviews } from "../data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section id="parents" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">From the parents</h2>
      <div className="mt-12 grid gap-10 lg:grid-cols-[18rem_1fr]">
        <div role="tablist" aria-label="Parent reviews" className="flex gap-2 overflow-x-auto lg:flex-col">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-xl px-4 py-3 text-left transition-colors ${
                i === active ? "bg-accent text-pine" : "hover:bg-fg/5"
              }`}
            >
              <span className="block font-bold">{r.name}</span>
              <span className="block text-sm opacity-70">{r.role}</span>
            </button>
          ))}
        </div>
        <div className="min-h-[14rem]" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="font-display text-2xl font-semibold leading-snug sm:text-4xl"
            >
              “{review.text}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
