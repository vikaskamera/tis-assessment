import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { classes, contact } from "../data/content";

const field =
  "w-full rounded-xl border border-fg/20 bg-transparent px-4 py-3 outline-none transition-colors focus:border-accent";

export default function Enquire() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo only: wire this to the school's admissions API / CRM.
    setSent(true);
  };

  return (
    <section id="enquire" className="scroll-mt-24 bg-pine py-28 text-[#EEF3F0]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">Enquire now</h2>
          <p className="mt-5 max-w-md text-[#EEF3F0]/80">
            CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.
          </p>
          <address className="mt-10 space-y-3 not-italic text-[#EEF3F0]/90">
            <p>
              Admission helpline: <a className="font-bold text-accent" href={contact.helplineHref}>{contact.helpline}</a>
            </p>
            <p>
              <a className="underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              <a className="underline underline-offset-4" href={contact.mapHref}>{contact.address}</a>
            </p>
            <p>Landline: {contact.landlines.join(", ")}</p>
          </address>
        </div>

        <div className="rounded-3xl bg-bg p-6 text-fg sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                className="py-16 text-center font-display text-2xl font-bold"
              >
                Thank you. Our admissions team will call you shortly.
              </motion.p>
            ) : (
              <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-4">
                <label className="block">
                  <span className="mb-1 block text-sm font-medium">Parent’s name</span>
                  <input required name="name" autoComplete="name" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium">Mobile number</span>
                  <input required name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium">Class applying for</span>
                    <select required name="class" defaultValue="" className={`${field} bg-bg`}>
                      <option value="" disabled>Select class</option>
                      {classes.map((c) => <option key={c}>Class {c}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium">State</span>
                    <input required name="state" className={field} />
                  </label>
                </div>
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input required type="checkbox" className="mt-1 accent-[rgb(242_182_50)]" />
                  I agree to receive information regarding my submitted application from Tulas International School, Dehradun.
                </label>
                <button type="submit" className="w-full rounded-full bg-accent py-3.5 font-bold text-pine transition-transform hover:scale-[1.02]">
                  Enquire now
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
