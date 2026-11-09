import React, { useEffect, useRef, useState } from "react";

const navLinks = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About SCON", href: "/about" },
  { id: "residences", label: "Residences", href: "/residences" },
  { id: "redevelopment", label: "Redevelopment", href: "/redevelopment" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function SiteHeader({ current = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handlePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="wordmark" href="/#home" aria-label="SCON home">
        <img src="/images/scon-hd-logo-colored.png" alt="SCON-HD Developers" />
      </a>
      <button
        type="button"
        className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`main-nav${isMenuOpen ? " is-open" : ""}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            className={current === link.id ? "is-current" : undefined}
            href={link.href}
            aria-current={current === link.id ? "page" : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
