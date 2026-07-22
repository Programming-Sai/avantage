import { ctaBanner } from "../data/site";

export default function CtaBannerSection() {
  return (
    <section
      className=" px-5 py-40 md:px-[60px] text-white"
      style={{ backgroundImage: `url('/cta-banner-bg.png')` }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-[#D48C2B]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              {ctaBanner.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {ctaBanner.title}
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex bg-[#D48C2B] px-8 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white"
        >
          {ctaBanner.cta}
        </a>
      </div>
    </section>
  );
}
