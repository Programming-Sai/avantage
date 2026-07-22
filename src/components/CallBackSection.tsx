import { useEffect, useRef, useState } from "react";

import { stats as siteStats, callbackSection } from "../data/site";

const stats = siteStats as unknown as typeof siteStats;

function AnimatedCount({
  target,
  active,
}: {
  target: string | number;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof target !== "number" || !active) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, target]);

  return <span>{typeof target === "number" ? `${value}+` : target}</span>;
}

export default function CallBackSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-8 md:py-5"
      style={{ backgroundImage: `url('/consultancy-subtle-bg.png')` }}
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full px-5 py-14 md:px-[60px] lg:w-[52%] lg:py-[90px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <span className="text-sm font-bold tracking-[0.2em] text-[#0A1128]">
              {callbackSection.eyebrow}
            </span>
          </div>
          <h2 className="text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#0D1B2A]">
            {callbackSection.titleTop}
          </h2>
          <h2 className="mt-1 text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#D48C2B]">
            {callbackSection.titleBottom}
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#333] sm:text-[16px] sm:leading-8">
            {callbackSection.body}
          </p>
          <a
            href="#"
            className="mt-9 inline-flex w-full justify-center bg-[#0D1B2A] px-8 py-4 text-sm font-bold text-white sm:w-auto"
          >
            {callbackSection.cta}
          </a>

          <div className="mt-12 grid gap-8 border-t border-gold/10 pt-10 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.label} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A1A1A]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D48C2B"
                    strokeWidth="1.6"
                  >
                    <path d="M12 2v20" />
                    <path d="M4 7h16" />
                    <path d="M4 17h16" />
                  </svg>
                </div>
                <p className="text-[34px] font-extrabold text-[#0D1B2A]">
                  <AnimatedCount target={stat.value} active={active} />
                </p>
                <p className="mt-2 text-[13.5px] leading-6 text-[#E0A83B]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[48%]">
          <img
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-callback.png"
            alt="Consultant at work"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
