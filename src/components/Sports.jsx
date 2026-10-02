import { sports } from "../data/content";
import Reveal from "./Reveal";

export default function Sports() {
  return (
    <section id="sports" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8">
      <Reveal>
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          16+ sports curated to bring joy and discipline to your life.
        </h2>
        <p className="mt-5 text-lg text-muted">It’s not just a facility. At Tulas it’s the foundation!</p>
      </Reveal>
      <ul className="mt-12 flex flex-wrap gap-3">
        {sports.map((s, i) => (
          <Reveal as="li" key={s} index={i % 8}>
            <span
              data-cursor
              className="inline-block rounded-full border border-fg/20 px-5 py-2.5 font-medium transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-pine"
            >
              {s}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
