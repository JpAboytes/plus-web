"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "./data";
import { IconMenu } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Plus Seguridad Privada" width={150} height={207} className="brand-logo" priority />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span className="brand-name">PLUS</span>
            <span className="brand-sub brand-text-sub">Seguridad Privada</span>
          </span>
        </a>

        <nav className="nav-desktop">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
          <a href="#contacto" className="nav-cta">Contáctanos</a>
        </nav>

        <button className="menu-toggle" aria-label="Menú" onClick={() => setOpen((o) => !o)}>
          <IconMenu stroke="#fff" />
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contacto" className="cta" onClick={() => setOpen(false)}>Contáctanos</a>
        </nav>
      )}
    </header>
  );
}
