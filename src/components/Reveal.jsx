import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered entrance. Wrap a list's items and pass `index`
 * to get a staggered cascade as the group enters the viewport.
 */
export default function Reveal({ children, index = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
