import { stats, rankings } from "../data/content";
import Reveal from "./Reveal";

export default function Campus() {
  return (
    <section id="campus" className="bg-pine py-24 text-[#EEF3F0]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="border-l border-[#EEF3F0]/20 pl-5">
              <dd className="font-display text-6xl font-extrabold text-accent sm:text-7xl">{s.value}</dd>
              <dt className="mt-2 max-w-[14rem] text-sm text-[#EEF3F0]/75">{s.label}</dt>
            </Reveal>
          ))}
        </dl>

        <h2 id="recognition" className="mt-28 scroll-mt-24 font-display text-3xl font-bold sm:text-4xl">
          Ranked among the best co-educational boarding schools
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {rankings.map((r, i) => (
            <Reveal as="li" key={i} index={i} className="flex gap-5 rounded-2xl border border-[#EEF3F0]/15 p-6">
              <span className="font-display text-5xl font-extrabold text-accent">{r.rank}</span>
              <div>
                <p className="font-bold">{r.place}</p>
                <p className="mt-1 text-sm text-[#EEF3F0]/75">
                  {r.title} by {r.by}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
