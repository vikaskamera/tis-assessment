import { personalities } from "../data/content";

export default function Personalities() {
  // The list is rendered twice so the CSS marquee loops without a visible jump.
  const loop = [...personalities, ...personalities];
  return (
    <section aria-labelledby="people-heading" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 id="people-heading" className="font-display text-3xl font-bold sm:text-4xl">
          Influential personalities on campus
        </h2>
      </div>
      <div className="marquee mt-10 overflow-hidden" role="list" aria-label="Notable visitors">
        <div className="marquee-track flex w-max gap-5">
          {loop.map((p, i) => (
            <div
              key={i}
              role="listitem"
              aria-hidden={i >= personalities.length}
              data-cursor
              className="w-72 shrink-0 rounded-2xl border border-fg/10 bg-card p-6"
            >
              <p className="font-display text-xl font-bold">{p.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
