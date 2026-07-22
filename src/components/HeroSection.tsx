import { useEffect, useState } from "react";
import { heroSlides } from "../data/site";

const slides = heroSlides as unknown as typeof heroSlides;

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#E5E7EB] md:min-h-[100dvh] lg:min-h-[120dvh]">
      {slides.map((slide, index) => (
        <div
          key={slide.titleBottom}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.36)_45%,rgba(255,255,255,0.06)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.86),rgba(255,255,255,0.28)_55%,rgba(255,255,255,0))]" />
          <div className="relative flex min-h-[88svh] items-end px-5 pb-12 pt-10 sm:pb-16 md:min-h-[96dvh] md:items-center md:pb-0 md:pt-0 md:px-[60px] lg:min-h-[120dvh]">
            <div
              className={`w-full max-w-[42rem] ${
                slide.align === "right"
                  ? "md:ml-auto md:max-w-[560px]"
                  : "md:max-w-[560px]"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#D48C2B]" />
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#0A1128] sm:text-sm">
                  {slide.eyebrow}
                </span>
              </div>
              <h1 className="text-[clamp(2.9rem,10vw,4.4rem)] font-extrabold leading-[1.02] text-[#0D1B2A]">
                {slide.titleTop}
              </h1>
              <h1 className="mt-1 text-[clamp(2.9rem,10vw,4.4rem)] font-extrabold leading-[1.02] text-[#D48C2B]">
                {slide.titleBottom}
              </h1>
              <p className="mt-5 max-w-[480px] text-base leading-7 text-[#333] sm:text-lg sm:leading-8">
                {slide.body}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#"
                  className="inline-flex w-full justify-center bg-[#D48C2B] px-8 py-4 text-sm font-bold text-white sm:w-auto"
                >
                  {slide.primaryCta}
                </a>
                <a
                  href="#"
                  className="inline-flex w-full justify-center bg-[#0D1B2A] px-8 py-4 text-sm font-bold text-white sm:w-auto"
                >
                  {slide.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 right-4 z-10 flex flex-row items-center gap-2 md:bottom-[50%] md:right-8 md:flex-col">
        {slides.map((slide, index) => (
          <button
            key={slide.titleBottom}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 w-2.5 transition ${
              index === active
                ? "h-3.5 w-3.5 rounded-full border-[#D48C2B] bg-[#D48C2B]"
                : "h-2 w-2 rounded-full bg-gray-500 md:h-4 md:w-1 md:rounded-none"
            }`}
          />
        ))}
      </div>
      <div
        id="hero-end"
        className="absolute bottom-0 left-0 h-px w-px"
        aria-hidden="true"
      />
    </section>
  );
}
