import { industries } from "../data/site";

const localIndustries = industries as unknown as typeof industries;

function IndustryIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="#D48C2B"
      strokeWidth="1.5"
      className="shrink-0"
    >
      <circle cx="18" cy="18" r="16" opacity="0.25" />
      <path d="M10 19h16" />
      <path d="M18 11v14" />
    </svg>
  );
}

export default function IndustriesSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 md:px-[60px] lg:py-24"
      style={{ backgroundImage: `url('/consultancy-subtle-bg.png')` }}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <span className="text-sm font-bold tracking-[0.2em] text-[#0A1128]">
              WHERE CAN WE HELP YOU
            </span>
          </div>
          <h2 className="text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#0D1B2A]">
            Consultancy
          </h2>
          <h2 className="mt-1 text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#D48C2B]">
            Industries
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#333] sm:text-[16px] sm:leading-8">
            Nanotechnology immersion along the information highway will close
            the loop on focusing solely on the bottom line. Override the digital
            divide with additional clickthroughs from DevOps.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {localIndustries.map((item) => (
            <article key={item.title} className="flex items-start gap-5">
              <IndustryIcon />
              <div>
                <h3 className="text-xl font-extrabold text-[#0D1B2A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-7 text-[#E0A83B]">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center border-t border-gold/10 pt-11">
          <a
            href="#"
            className="inline-flex bg-[#0D1B2A] px-8 py-4 text-[15px] font-bold text-white"
          >
            View all Industries
          </a>
        </div>
      </div>
    </section>
  );
}
