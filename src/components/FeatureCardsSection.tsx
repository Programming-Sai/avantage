import { featureCards } from "../data/site";

const cards = featureCards as unknown as typeof featureCards;

export default function FeatureCardsSection() {
  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-[1400px] px-5 pb-20 md:-mt-[90px] md:px-[60px]">
      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden bg-white shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
          >
            <div
              className="relative flex min-h-[340px] flex-col justify-end bg-cover bg-center sm:min-h-[380px] lg:h-[400px]"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundPosition: "50% 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="z-10 px-6 pb-8 pt-10 sm:px-8 sm:pb-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-6 bg-[#D48C2B]" />
                  <span className="text-[13px] font-bold tracking-[0.12em] text-[#333]">
                    {card.eyebrow}
                  </span>
                </div>
                <h3 className="text-[26px] font-extrabold text-[#0D1B2A]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#E0A83B]">
                  {card.body}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex bg-[#D48C2B] px-7 py-4 text-sm font-bold text-white"
                >
                  {card.cta}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
