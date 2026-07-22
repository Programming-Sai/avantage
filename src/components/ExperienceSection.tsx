import { useEffect, useRef, useState, type ReactNode } from "react";
import { experiencePoints as dataExperience } from "../data/site";

const icons: ReactNode[] = [
  <svg
    width="30"
    height="30"
    viewBox="0 0 48 48"
    fill="none"
    stroke="#0D1B2A"
    strokeWidth="1.6"
  >
    <path d="M12 6 h24" />
    <path d="M12 42 h24" />
    <path d="M14 6 v6 a10 10 0 0 0 20 0 V6" />
    <path d="M14 42 v-6 a10 10 0 0 1 20 0 v6" />
  </svg>,
  <svg
    width="30"
    height="30"
    viewBox="0 0 48 48"
    fill="none"
    stroke="#0D1B2A"
    strokeWidth="1.6"
  >
    <polyline points="8 20 20 10 28 16 40 6" />
    <polyline points="32 6 40 6 40 14" />
  </svg>,
  <svg
    width="30"
    height="30"
    viewBox="0 0 48 48"
    fill="none"
    stroke="#0D1B2A"
    strokeWidth="1.6"
  >
    <circle cx="24" cy="24" r="17" />
    <path d="M7 24 h34" />
  </svg>,
];

const experiencePoints = (
  dataExperience as unknown as { title: string; body: string }[]
).map((p, i) => ({
  title: p.title,
  body: p.body,
  pct: [0.96, 0.88, 0.92][i] ?? 0.9,
  icon: icons[i] ?? icons[0],
}));

const ringRadius = 52;
const circumference = 2 * Math.PI * ringRadius;

function StatRing({ pct, icon }: { pct: number; icon: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto mb-6 h-[120px] w-[120px]">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="absolute inset-0"
      >
        <circle
          cx="60"
          cy="60"
          r={ringRadius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="5"
        />
        <circle
          cx="60"
          cy="60"
          r={ringRadius}
          fill="none"
          stroke="#D48C2B"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={visible ? circumference * (1 - pct) : circumference}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 1.4s ease-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="w-full py-14 md:py-[70px]" aria-label="Experience">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full lg:w-[46%] lg:min-w-[420px]">
          <img
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-experience.png"
            alt="Team at work"
            className="h-auto w-full"
          />
        </div>

        <div className="w-full px-5 pt-10 md:px-[60px] lg:w-[54%] lg:px-[60px] lg:pt-5">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#D48C2B]" />
              <span className="text-sm font-bold tracking-[0.2em] text-[#0A1128]">
                GROWING WITH OUR CLIENTS
              </span>
            </div>
            <h2 className="text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#0D1B2A]">
              30 Years of
            </h2>
            <h2 className="mt-1 text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#D48C2B]">
              Experience
            </h2>
          </div>

          <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:gap-10">
            <p className="flex-1 text-[15px] leading-7 text-[#E0A83B] sm:leading-8">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
            <p className="flex-1 text-[15px] leading-7 text-[#E0A83B] sm:leading-8">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              diversity.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {experiencePoints.map((point) => (
              <article key={point.title} className="text-center">
                <StatRing pct={point.pct} icon={point.icon} />
                <h3 className="text-[19px] font-extrabold text-[#0D1B2A]">
                  {point.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#E0A83B]">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
