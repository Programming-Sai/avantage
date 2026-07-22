import { testimonials as siteTestimonials } from "../data/site";

const testimonials = siteTestimonials as unknown as typeof siteTestimonials;

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-[70px]">
      <div
        className="relative overflow-hidden px-5 py-16 text-white md:px-[60px] lg:py-[90px] lg:[clip-path:polygon(0_6%,100%_0%,100%_94%,0%_100%)]"
        style={{ backgroundImage: `url('/cta-banner-bg.png')` }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <span className="text-sm font-bold tracking-[0.2em] text-white">
              GREAT REVIEWS FOR OUR SERVICES
            </span>
          </div>
          <h2 className="text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-white">
            Trusted by some
          </h2>
          <h2 className="mt-1 text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#D48C2B]">
            Biggest Names
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto mb-6 h-[110px] w-[110px] rounded-full border-[3px] border-white object-cover"
                />
                <h3 className="text-[19px] font-extrabold text-[#D48C2B]">
                  {item.name}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-[#E5E7EB]">
                  {item.quote}
                </p>
                <div className="mt-4 text-[14px] tracking-[0.16em] text-[#D48C2B]">
                  {"* * * * *"}
                </div>
                <p className="mt-4 text-[12px] font-bold tracking-[0.18em] text-[#E5E7EB]">
                  AUTHOR
                </p>
                <p className="mt-1 text-[15px] font-extrabold text-white">
                  {item.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
