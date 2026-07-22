import { corePillars, contactInfo } from "../data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <iframe
        src="https://www.google.com/maps?q=Ga+West+Accra+Sapeiman&output=embed"
        width="100%"
        height="420"
        className="block h-[420px] border-0 sm:h-[520px] lg:h-[750px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="KANK Consults - Ga West, Accra map"
      />

      <div className="relative mx-auto -mt-14 max-w-7xl px-5 pb-16 md:-mt-20 md:px-[60px]">
        <div className="rounded-none bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:p-[40px]">
          {/* Heading + description */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <span className="text-sm font-bold tracking-[0.2em] text-[#D48C2B]">
              Our Offices
            </span>
          </div>
          <h2 className="text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold text-[#0D1B2A]">
            {contactInfo.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#4B5563]">
            {contactInfo.description}
          </p>

          {/* Core pillars — full width, evenly spaced */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[14px] border border-[#E5E7EB] bg-[#F9F8F3] p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D48C2B]">
                  {pillar.title}
                </p>
                <p className="mt-3 text-base leading-7 text-[#0D1B2A]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* Contact details */}
          <div className="mt-10 grid gap-8 border-t border-[#E5E7EB] pt-8 sm:grid-cols-3">
            {[
              {
                title: "Address",
                body: (
                  <>
                    {contactInfo.location}
                    <br />
                    Ghana
                  </>
                ),
                icon: (
                  <path d="M12 21c-4-4.5-7-8.2-7-11.5A7 7 0 0 1 19 9.5C19 12.8 16 16.5 12 21z" />
                ),
              },
              {
                title: "Call us",
                body: (
                  <>
                    {contactInfo.phones[0]}
                    <br />
                    {contactInfo.phones[1]}
                  </>
                ),
                icon: (
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
                ),
              },
              {
                title: "Email us",
                body: <>{contactInfo.email}</>,
                icon: (
                  <>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D48C2B"
                  strokeWidth="1.6"
                  className="shrink-0"
                >
                  {item.icon}
                </svg>
                <div>
                  <h3 className="text-[18px] font-extrabold text-[#0D1B2A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#4B5563]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
