import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart
          education through seamless opportunities.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <Reveal index={1}>
          <h2 className="font-display text-2xl font-bold">Boarding and day school excellence</h2>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">
            We provide world-class education, modern facilities, and a nurturing environment for students to thrive
            academically, socially, and culturally. Join TIS to be part of a community that encourages leadership,
            innovation, and lifelong learning.
          </p>
        </Reveal>
        <Reveal index={2}>
          <h2 className="font-display text-2xl font-bold">What’s the secret to making school awesome?</h2>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">
            Making learning feel like an adventure, where curiosity leads, creativity thrives, and every day brings
            something new to discover. When students are inspired, they don’t just learn, they grow, explore, and
            shape their own futures. There, we cracked it!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
