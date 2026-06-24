"use client";

import { useEffect, useRef, useState } from "react";

// SSR-safe reveal: content is visible by default. We only hide + animate
// elements that are OFF-screen at mount (so the hide is never seen). Anything
// already in view — like the hero — stays visible, so JS timing can never
// leave the page blank.
export default function Reveal({ children, as: Tag = "div", className = "", style, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState("idle"); // idle (visible) | hidden | shown

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (r.top < vh && r.bottom > 0) return; // already visible -> leave as-is

    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setState("shown");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const revealClass =
    state === "hidden" ? "reveal" : state === "shown" ? "reveal is-visible" : "";

  return (
    <Tag ref={ref} className={`${revealClass} ${className}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  );
}
