import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVERABLE = "a, button, input, select, [data-cursor]";

/** Ring that trails the pointer and grows over interactive elements. Fine pointers only. */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 36, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 36, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => setActive(Boolean(e.target.closest(HOVERABLE)));

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4"
    >
      <motion.div
        animate={{ scale: active ? 2.2 : 1, backgroundColor: active ? "rgb(242 182 50 / 0.25)" : "rgb(242 182 50 / 0)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="h-8 w-8 rounded-full border-2 border-accent"
      />
    </motion.div>
  );
}
