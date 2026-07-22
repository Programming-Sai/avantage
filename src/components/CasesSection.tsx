import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import { cases as siteCases, caseCards } from "../data/site";

const tabs = (siteCases as readonly string[]).map((label) => ({
  label,
  value: label
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z]/gi, ""),
}));

const cards = caseCards as unknown as typeof caseCards;

export default function CasesSection() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]["value"]>("all");

  const filteredCards = useMemo(
    () =>
      activeTab === "all"
        ? cards
        : cards.filter((card) => card.category === activeTab),
    [activeTab],
  );

  return (
    <section className="bg-white px-5 py-16 md:px-[60px] lg:py-[90px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-0.5 w-8 bg-[#D48C2B]" />
          <span className="text-sm font-bold tracking-[0.2em] text-[#0A1128]">
            SEE WHAT WE DO
          </span>
        </div>
        <h2 className="text-[clamp(2.25rem,6vw,3.25rem)] font-extrabold leading-[1.06] text-[#0D1B2A]">
          Consultancy <span className="text-[#D48C2B]">Cases</span>
        </h2>

        <div className="-mx-5 mt-8 flex gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {tabs.map((tab) => {
            const active = tab.value === activeTab;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`flex shrink-0 items-center gap-2 text-sm font-bold transition-colors ${
                  active ? "text-[#D48C2B]" : "text-[#0D1B2A]"
                }`}
              >
                <span
                  className={`h-0.5 w-4 ${active ? "bg-[#D48C2B]" : "bg-transparent"}`}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-[14px] sm:grid-cols-2 xl:grid-cols-3">
          {filteredCards.map((card) => (
            <article
              key={card.title}
              className="group relative min-h-[340px] overflow-hidden sm:min-h-[380px] lg:h-[400px]"
            >
              <div
                className="h-full w-full cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              <div className="absolute inset-x-0 bottom-0 h-[70%] w-full translate-y-0 transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0">
                <div className="relative h-full w-full overflow-hidden bg-white [clip-path:polygon(0%_55%,100%_0%,100%_100%,0%_100%)]">
                  <button
                    type="button"
                    aria-label={`View ${card.title}`}
                    className="absolute right-0 top-0 flex h-24 w-24 items-center justify-end bg-[#0D1B2A] p-3 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] sm:h-28 sm:w-28 md:h-36 md:w-36"
                  >
                    <Plus className="h-7 w-7 text-white sm:h-8 sm:w-8 md:h-10 md:w-10" />
                  </button>

                  <div className="mt-20 px-5 pt-12 sm:px-6 sm:pt-24">
                    <h3 className="text-[18px] font-extrabold text-[#D48C2B]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#555]">
                      {card.body}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
