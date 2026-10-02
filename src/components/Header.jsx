import { nav, contact } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-1 z-50 px-4 pt-3 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-fg/10 bg-bg/75 px-5 py-2.5 backdrop-blur-md">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Tulas <span className="hidden sm:inline">International School</span>
        </a>
        <nav aria-label="Primary" className="hidden gap-7 text-sm font-medium md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted transition-colors hover:text-fg">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={contact.applyHref}
            className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-pine transition-transform hover:scale-105"
          >
            Apply now
          </a>
        </div>
      </div>
    </header>
  );
}
