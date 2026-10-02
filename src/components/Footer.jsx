import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-5 py-10 text-sm text-muted sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
        <p>Copyright © 2026 Tulas International School, Dehradun. All Rights Reserved.</p>
        <p>
          <a href={contact.applyHref} className="underline underline-offset-4">Apply now</a>
        </p>
      </div>
    </footer>
  );
}
