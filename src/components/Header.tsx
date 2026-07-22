import { useEffect, useState, type ReactNode } from "react";
import { footerLinks } from "../data/site";

const links = (footerLinks as readonly string[]).map(
  (l) =>
    // normalize display text
    l.charAt(0) + l.slice(1).toLowerCase(),
);

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center text-[#D48C2B] transition-transform hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  );
}

function SocialRow() {
  return (
    <div className="flex items-center gap-4 text-[#D48C2B]">
      <SocialIcon label="Facebook">
        <path d="M14.5 8H16V5h-1.5C12.6 5 11 6.6 11 8.5V10H9v3h2v6h3v-6h2.1l.4-3H14v-1.2c0-.5.4-.8.9-.8z" />
      </SocialIcon>
      <SocialIcon label="Twitter">
        <path d="M20 7.2c-.6.3-1.2.6-1.9.7.7-.4 1.2-1 1.4-1.8-.6.4-1.4.7-2.1.9a3.3 3.3 0 0 0-5.7 2.2c0 .3 0 .6.1.8-2.8-.1-5.3-1.5-7-3.6-.3.5-.4 1-.4 1.6 0 1.1.6 2 1.4 2.6-.5 0-1-.2-1.4-.4v.1c0 1.6 1.1 3 2.7 3.3-.3.1-.6.1-.9.1-.2 0-.4 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6A6.6 6.6 0 0 1 4 17.8 9.3 9.3 0 0 0 9 19.2c5.4 0 8.5-4.5 8.5-8.5v-.4c.7-.5 1.3-1.1 1.8-1.8z" />
      </SocialIcon>
      <SocialIcon label="Pinterest">
        <path d="M12.2 4C7.7 4 5 7 5 10.7c0 2.5 1.4 3.9 2.3 3.9.4 0 .7-1.1.7-1.4 0-.4-1-1.2-1-2.8 0-3.4 2.6-5.8 6-5.8 2.6 0 4.5 1.5 4.5 4.2 0 2-.8 5.8-3.4 5.8-1 0-1.9-.7-1.9-1.8 0-1.6 1.1-3.2 1.1-4.9 0-.8-.4-1.5-1.3-1.5-1.1 0-2 1.2-2 2.8 0 1 .3 1.7.3 1.7l-1.4 5.7c-.2.9-.1 2.2-.1 3.2.1.1.2.1.3 0 1.5-2 1.4-2.3 2-4.8.3 0 .8.1 1.2.1 4.1 0 7-3.1 7-7.4C19 6.7 16.1 4 12.2 4z" />
      </SocialIcon>
      <SocialIcon label="LinkedIn">
        <path d="M6.5 8.5H4v11h2.5v-11zm-1.2-4A1.45 1.45 0 1 0 5.3 7a1.45 1.45 0 0 0 0-2.9zM20 13.1c0-3-1.6-4.5-3.8-4.5-1.8 0-2.6 1-3 1.6v-1.7h-2.5v11h2.5v-5.9c0-1.6.3-3.1 2-3.1s1.7 1.5 1.7 3.2v5.8H20v-6.4z" />
      </SocialIcon>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const marker = document.getElementById("hero-end");
    if (!marker) return;

    if (!("IntersectionObserver" in window)) {
      const onScroll = () => {
        const rect = marker.getBoundingClientRect();
        setPastHero(rect.top <= 0);
      };

      onScroll();
      if (
        typeof globalThis !== "undefined" &&
        typeof globalThis.addEventListener === "function"
      ) {
        globalThis.addEventListener("scroll", onScroll, { passive: true });
      }
      return () => {
        if (
          typeof globalThis !== "undefined" &&
          typeof globalThis.removeEventListener === "function"
        ) {
          globalThis.removeEventListener("scroll", onScroll);
        }
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting && entry.boundingClientRect.top <= 0);
      },
      { threshold: 0 },
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative z-50">
      <div
        className={`hidden bg-[#0D1B2A] px-5 py-3 text-sm lg:block lg:px-[60px] transition-opacity duration-300 ${
          pastHero ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-white sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-2 sm:text-left">
            <p>
              <span className="mr-1 font-bold">Monday - Friday</span>
              <span className="text-white/65">8AM - 9PM</span>
            </p>
            <p className="text-white/85">
              <span className="mr-1 font-bold">Offices</span>
              <span className="text-white/65">Ga West, Accra, Sapeiman</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-white">Visit our social pages</p>
            <SocialRow />
          </div>
        </div>
      </div>

      <div
        className={`bg-white border-b border-black/5 px-5 py-4 md:px-[60px] md:py-4 lg:py-5 transition-shadow duration-300 ${
          pastHero
            ? "fixed left-0 right-0 top-0 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            : "relative"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:flex-row md:items-center md:gap-6">
          <a href="#" className="shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto sm:h-14 md:h-16"
            />
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] border border-gold/10 text-[#0D1B2A] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          </button>

          <nav className="hidden flex-wrap items-center gap-7 md:flex lg:gap-9">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[15px] font-bold text-[#0A1128] transition-colors hover:text-[#D48C2B] lg:text-base"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="tel:0504453099"
            className="hidden items-center justify-center rounded-[2px] bg-[#D48C2B] px-5 py-3 text-sm font-bold text-white md:inline-flex lg:px-6 lg:py-4"
          >
            0504 453 099
          </a>
        </div>
      </div>

      {pastHero ? (
        <div className="h-[88px] md:h-[96px]" aria-hidden="true" />
      ) : null}

      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#0A1128]/70 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col bg-white shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex-1 overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 text-white">
              <div>
                <img src="/logo.png" alt="Logo" className="mt-2 h-20 w-auto" />
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45  bg-[#0D1B2A] " />
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45  bg-[#0D1B2A] " />
                </span>
              </button>
            </div>
            <ul className="space-y-1 px-5 py-4">
              {links.map((link) => (
                <li key={link} className="border-b border-black/5">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-[15px] font-bold text-[#0D1B2A] transition-colors hover:text-[#D48C2B]"
                  >
                    <span>{link}</span>
                    <span className="text-[#D48C2B]">&rsaquo;</span>
                  </a>
                </li>
              ))}
            </ul>{" "}
            <div className="border-t border-black/5 bg-[#0D1B2A] px-5 py-4 text-sm text-white">
              <div className="space-y-3">
                <p>
                  <span className="mr-1 font-bold">Monday - Friday</span>
                  <span className="text-white/70">8AM - 9PM</span>
                </p>
                <p>
                  <span className="mr-1 font-bold">Offices</span>
                  <span className="text-white/70">
                    Bloomsbury Square, London WC1B 4EA
                  </span>
                </p>
                <div>
                  <p className="font-bold">Visit our social pages</p>
                  <div className="mt-3">
                    <SocialRow />
                  </div>
                </div>
              </div>

              <a
                href="tel:02079460020"
                className="mt-5 flex items-center justify-center rounded-[2px] text-white px-6 py-4 text-sm font-bold bg-[#D48C2B]"
              >
                020 7946 0020
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
