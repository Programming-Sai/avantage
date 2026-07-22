// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import FeatureCardsSection from "./components/FeatureCardsSection";
// import IndustriesSection from "./components/IndustriesSection";
// import ExperienceSection from "./components/ExperienceSection";
// import TestimonialsSection from "./components/TestimonialsSection";
// import LogoStripSection from "./components/LogoStripSection";
// import CallBackSection from "./components/CallBackSection";
// import CasesSection from "./components/CasesSection";
// import CtaBannerSection from "./components/CtaBannerSection";
// import NewsSection from "./components/NewsSection";
// import ContactSection from "./components/ContactSection";
// import FooterSection from "./components/FooterSection";

// export default function App() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
//       <Header />
//       <HeroSection />
//       <FeatureCardsSection />
//       <IndustriesSection />
//       <ExperienceSection />
//       <TestimonialsSection />
//       {/* <LogoStripSection /> */}
//       <CallBackSection />
//       {/* <CasesSection /> */}
//       <CtaBannerSection />
//       {/* <NewsSection /> */}
//       <ContactSection />
//       <FooterSection />
//     </main>
//   );
// }

import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  TrendingUp,
  Search,
  Handshake,
  LineChart,
  Target,
  Landmark,
  Compass,
  ClipboardCheck,
  Rocket,
  Building2,
  MapPin,
  CircleAlert,
  DollarSign,
  Briefcase,
  Zap,
  Phone,
  MessageCircle,
  Mail,
  FileText,
  BookOpen,
  Newspaper,
  X,
} from "lucide-react";
import { useState } from "react";
import content from "./data/content.json";

// Maps the icon name stored in content.json to its Lucide component,
// so the JSON stays the single source of truth for which icon each item uses.
const ICONS = {
  "trending-up": TrendingUp,
  search: Search,
  handshake: Handshake,
  "chart-line": LineChart,
  target: Target,
  landmark: Landmark,
  compass: Compass,
  "clipboard-check": ClipboardCheck,
  rocket: Rocket,
  "file-text": FileText,
  "book-open": BookOpen,
  newspaper: Newspaper,
};

function Icon({ name, ...props }) {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp {...props} /> : null;
}

function Header() {
  const { brand, nav } = content;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-[#1e3b5c]/95 backdrop-blur">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#top" className="group flex items-center gap-3">
          {brand?.logo ? (
            <img
              className="grid place-items-center w-auto h-9  transition-color object-cover"
              src={brand.logo}
            />
          ) : (
            <span className="grid place-items-center w-9 h-9 rounded-lg border border-[#b88f4f]/70 text-[#b88f4f] font-display text-lg leading-none transition-colors group-hover:bg-[#b88f4f] group-hover:text-white">
              {brand.monogram}
            </span>
          )}

          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-tight text-white">
              {brand.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] mt-1 text-white/60 w-[10rem]">
              {brand.tagline}
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium tracking-wide transition-colors text-white/85 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#b88f4f] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#b88f4f] text-white text-sm font-medium px-5 py-2.5 shadow-[0_6px_20px_-6px_rgba(197,150,80,0.6)] hover:bg-[#1e3b5c] hover:shadow-[0_8px_28px_-6px_rgba(30,58,95,0.5)] transition-all duration-300"
          >
            {nav.cta}
            <ArrowUpRight className="w-[15px] h-[15px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>
        <button
          className="lg:hidden text-white"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-white backdrop-blur border-t border-[#1e3b5c]/10 px-6 py-8 flex flex-col gap-6">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#1e3b5c]/85 hover:text-[#1e3b5c] text-base font-medium tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#b88f4f] text-white text-sm font-medium px-5 py-3 shadow-[0_6px_20px_-6px_rgba(197,150,80,0.6)] transition-all duration-300"
          >
            Request an {nav.cta}
            <ArrowUpRight className="w-[15px] h-[15px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { hero } = content;
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#1e3b5c]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {hero.backgroundImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="African business professionals and city scenes representing Brellenton's advisory work"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === hero.backgroundImages.length - 1 ? 0.88 : 0.12,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3b5c]/75 via-[#1e3b5c]/45 to-[#1e3b5c]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3b5c]/85 via-[#1e3b5c]/25 to-transparent"></div>
        <div className="absolute inset-0 hero-vignette opacity-80"></div>
        <div className="absolute inset-0 grain opacity-[0.12] pointer-events-none"></div>
      </div>

      <div className="relative flex-1 flex items-center mx-auto max-w-[92rem] w-full px-6 lg:px-14 pt-32 pb-20 sm:pt-40">
        <div className="max-w-5xl">
          <p className="flex items-center gap-4 text-[#b88f4f] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.45em] mb-9">
            <span className="h-px w-14 bg-gradient-to-r from-[#b88f4f] to-[#b88f4f]/20"></span>{" "}
            {hero.kicker}
          </p>
          <h1 className="font-display font-normal text-white text-[3.1rem] sm:text-[4.6rem] lg:text-[4.6rem] leading-[0.94] tracking-[-0.035em] text-balance">
            {hero.headlineLines.map((line, i) => (
              <span
                key={i}
                className={`block${i === hero.headlineLines.length - 1 ? " gold-text" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mt-10"></div>
          <p className="text-white/85 text-xl lg:text-[1.45rem] leading-relaxed mt-8 max-w-2xl font-light tracking-[-0.005em]">
            {hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-7 mt-14">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#b88f4f] text-white font-medium text-[0.95rem] px-9 py-[1.15rem] shadow-[0_16px_40px_-10px_rgba(197,150,80,0.7)] hover:bg-white hover:text-[#1e3b5c] transition-all duration-300"
            >
              {hero.primaryCta}
              <ArrowUpRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-white/90 font-medium hover:text-[#b88f4f] transition-colors"
            >
              <ArrowRight className="w-[17px] h-[17px] group-hover:translate-x-1 transition-transform" />
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-14 bottom-40 z-10 flex-col items-center gap-3 text-white/45">
        <span className="text-[10px] uppercase tracking-[0.35em] [writing-mode:vertical-rl]">
          {hero.scrollLabel}
        </span>
        <span className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></span>
      </div>

      <div className="relative inset-x-0 border-t border-white/10 glass-panel backdrop-blur-2xl">
        <div className="mx-auto max-w-[92rem] px-6 lg:px-14 grid grid-cols-2 md:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/10">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="py-7 px-6 text-center md:text-left"
            >
              <div className="font-display text-[1.85rem] lg:text-[2.2rem] text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/55 text-[10px] uppercase tracking-[0.24em] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = content.marquee;
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#1e3b5c] py-4 overflow-hidden border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-white/55 text-xs uppercase tracking-[0.24em] font-medium mx-10"
          >
            {item}{" "}
            <span className="ml-10 w-1 h-1 rounded-full bg-[#b88f4f]"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionKicker({ children }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.38em] mb-7 text-[#b88f4f]">
      <span className="h-px w-10 bg-gradient-to-r from-[#b88f4f] to-[#b88f4f]/30"></span>{" "}
      {children}
    </p>
  );
}

function Firm() {
  const { firm } = content;
  return (
    <section id="firm" className="py-28 lg:py-40">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <SectionKicker>The Firm</SectionKicker>
          <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
            {firm.heading}
          </h2>
          <div className="h-px w-full gold-rule my-9 opacity-40"></div>
          {firm.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-muted-foreground text-lg leading-relaxed${i > 0 ? " mt-5" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 border-t border-l border-[#b88f4f] hidden lg:block"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 border-b border-r border-[#b88f4f] hidden lg:block"></div>
            <div className="relative overflow-hidden w-full h-[32rem] rounded-2xl shadow-[0_50px_90px_-35px_rgba(15,30,60,0.45)]">
              <img
                src={firm.image}
                alt={firm.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 lg:left-10 bg-[#1e3b5c] text-white p-7 max-w-[16rem] rounded-2xl shadow-[0_30px_60px_-20px_rgba(30,58,95,0.55)] hidden md:block">
              <div className="font-display text-[2rem] text-[#b88f4f] leading-none">
                {firm.badge.title}
              </div>
              <div className="text-white/70 text-sm mt-2 leading-relaxed">
                {firm.badge.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { services } = content;
  return (
    <section id="services" className="py-28 lg:py-40 bg-secondary relative">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionKicker>{services.kicker}</SectionKicker>
            <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
              {services.heading}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            {services.intro}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((item) => (
            <div
              key={item.number}
              className="group relative bg-white rounded-2xl border border-border/70 p-10 h-full overflow-hidden transition-all duration-500 hover:bg-[#1e3b5c] hover:border-[#1e3b5c] hover:shadow-[0_30px_60px_-25px_rgba(30,58,95,0.45)]"
            >
              <span className="font-display text-sm text-[#b88f4f]/70 group-hover:text-[#b88f4f] transition-colors">
                {item.number}
              </span>
              <div className="inline-block">
                <Icon
                  name={item.icon}
                  className="w-[30px] h-[30px] text-[#b88f4f] mt-6"
                  strokeWidth={1.4}
                />
              </div>
              <h3 className="font-display text-xl text-[#1e3b5c] mt-6 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed mt-3 group-hover:text-white/70 transition-colors">
                {item.description}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#b88f4f] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const { plans } = content;
  return (
    <section id="plans" className="py-28 lg:py-40 bg-white relative">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionKicker>{plans.kicker}</SectionKicker>
            <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
              {plans.heading}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            {plans.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.items.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "group relative rounded-2xl p-10 h-full flex flex-col bg-[#1e3b5c] border border-[#1e3b5c] shadow-[0_30px_70px_-25px_rgba(30,58,95,0.5)] lg:-translate-y-4"
                  : "group relative rounded-2xl p-10 h-full flex flex-col bg-white border border-border/70 shadow-[0_10px_40px_-25px_rgba(30,58,95,0.25)] hover:border-[#b88f4f]/50 transition-colors duration-500"
              }
            >
              {plan.featured && plan.featuredLabel && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#b88f4f] text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-1.5 shadow-[0_6px_16px_-4px_rgba(197,150,80,0.6)]">
                  {plan.featuredLabel}
                </span>
              )}

              <h3
                className={
                  plan.featured
                    ? "font-display text-xl text-white"
                    : "font-display text-xl text-[#1e3b5c]"
                }
              >
                {plan.name}
              </h3>
              <p
                className={
                  plan.featured
                    ? "text-white/60 text-[13px] mt-1.5 leading-relaxed"
                    : "text-muted-foreground text-[13px] mt-1.5 leading-relaxed"
                }
              >
                {plan.tagline}
              </p>

              <div
                className={
                  plan.featured
                    ? "mt-8 pb-8 border-b border-white/10"
                    : "mt-8 pb-8 border-b border-border"
                }
              >
                {plan.custom ? (
                  <div
                    className={
                      plan.featured
                        ? "font-display text-3xl text-[#b88f4f]"
                        : "font-display text-3xl text-[#1e3b5c]"
                    }
                  >
                    {plans.customLabel}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span
                      className={
                        plan.featured
                          ? "text-[#b88f4f] text-sm font-semibold uppercase tracking-wide"
                          : "text-[#1e3b5c]/60 text-sm font-semibold uppercase tracking-wide"
                      }
                    >
                      {plans.currency}
                    </span>
                    <span
                      className={
                        plan.featured
                          ? "font-display text-5xl text-white leading-none"
                          : "font-display text-5xl text-[#1e3b5c] leading-none"
                      }
                    >
                      {plan.price}
                    </span>
                  </div>
                )}
                <div
                  className={
                    plan.featured
                      ? "text-white/50 text-[11px] uppercase tracking-[0.2em] mt-2"
                      : "text-muted-foreground text-[11px] uppercase tracking-[0.2em] mt-2"
                  }
                >
                  {!plan.custom && plans.periodLabel}
                </div>
              </div>

              <ul className="space-y-3.5 mt-8 flex-1">
                {plan.features.map((feature, i) => {
                  const isSubHeading = feature.endsWith(",");
                  return (
                    <li
                      key={i}
                      className={
                        isSubHeading
                          ? `flex items-start gap-2.5 text-[13.5px] font-semibold ${plan.featured ? "text-white" : "text-[#1e3b5c]"}`
                          : `flex items-start gap-2.5 text-[13.5px] ${plan.featured ? "text-white/75" : "text-muted-foreground"}`
                      }
                    >
                      {!isSubHeading && (
                        <span
                          className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.featured ? "bg-[#b88f4f]" : "bg-[#b88f4f]"}`}
                        ></span>
                      )}
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                className={
                  plan.featured
                    ? "group/btn mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#b88f4f] text-white text-sm font-medium px-6 py-3.5 shadow-[0_12px_30px_-10px_rgba(197,150,80,0.6)] hover:bg-white hover:text-[#1e3b5c] transition-all duration-300"
                    : "group/btn mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-[#1e3b5c] text-sm font-medium px-6 py-3.5 hover:bg-[#1e3b5c] hover:text-white transition-all duration-300"
                }
              >
                {plans.ctaLabel}
                <ArrowUpRight className="w-[15px] h-[15px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const { approach } = content;
  return (
    <section id="approach" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-2/5 h-full opacity-0 lg:opacity-100 pointer-events-none transition-opacity">
        <div className="relative overflow-hidden w-full h-full opacity-[0.09]">
          <img
            src={approach.backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
      </div>
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12 relative">
        <div className="max-w-2xl mb-16">
          <SectionKicker>{approach.kicker}</SectionKicker>
          <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
            {approach.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step) => (
            <div
              key={step.number}
              className="group relative pt-10 pr-8 border-t-2 border-[#1e3b5c]/10 hover:border-[#b88f4f] transition-colors duration-500"
            >
              <span className="font-display text-6xl text-[#1e3b5c]/[0.07] absolute -top-2 right-4 group-hover:text-[#b88f4f]/15 transition-colors">
                {step.number}
              </span>
              <div className="inline-block">
                <Icon
                  name={step.icon}
                  className="w-7 h-7 text-[#b88f4f]"
                  strokeWidth={1.4}
                />
              </div>
              <h3 className="font-display text-xl text-[#1e3b5c] mt-5">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed mt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const { sectors } = content;
  return (
    <section
      id="sectors"
      className="relative py-28 lg:py-40 overflow-hidden bg-[#1e3b5c]"
    >
      <div className="absolute inset-0">
        <div className="relative overflow-hidden w-full h-full opacity-50">
          <img
            src={sectors.backgroundImage}
            alt={sectors.backgroundImageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3b5c] via-[#1e3b5c]/85 to-[#1e3b5c]/50"></div>
      <div className="relative mx-auto max-w-[80rem] px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionKicker>{sectors.kicker}</SectionKicker>
          <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-white leading-[1.06] tracking-tight text-balance">
            {sectors.heading}
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mt-8">
            {sectors.intro}
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {sectors.items.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 bg-[#1e3b5c]/50 backdrop-blur-sm px-7 py-7 hover:bg-white transition-colors duration-400"
              >
                <span className="inline-flex">
                  <Building2
                    className="w-[18px] h-[18px] text-[#b88f4f] shrink-0"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="text-white font-medium group-hover:text-[#1e3b5c] transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const { insights } = content;
  return (
    <section
      id="insights"
      className="py-28 lg:py-40 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionKicker>{insights.kicker}</SectionKicker>
            <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
              {insights.heading}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            {insights.intro}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.articles.map((article) => (
            <article
              key={article.title}
              className="group relative bg-white rounded-2xl border border-border/70 overflow-hidden h-full flex flex-col cursor-pointer shadow-[0_2px_20px_-12px_rgba(30,58,95,0.25)] hover:shadow-[0_36px_70px_-30px_rgba(30,58,95,0.4)] transition-shadow duration-500"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3b5c]/70 via-[#1e3b5c]/0 to-transparent"></div>
                <span className="absolute top-4 left-4 flex items-center gap-2 bg-[#1e3b5c]/90 text-[#b88f4f] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5">
                  <Icon name={article.tagIcon} className="w-3 h-3" />{" "}
                  {article.tag}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-xl text-[#1e3b5c] leading-snug group-hover:text-[#b88f4f] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mt-3 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <FileText
                      className="w-[13px] h-[13px]"
                      style={{ display: "none" }}
                    />
                    {article.meta}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#1e3b5c] text-sm font-medium group-hover:text-[#b88f4f] transition-colors">
                    {article.readLabel}
                    <ArrowUpRight className="w-[14px] h-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#b88f4f] transition-all duration-500 group-hover:w-full"></div>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[#1e3b5c] font-medium hover:text-[#b88f4f] transition-colors"
          >
            {insights.archiveCta}
            <ArrowRight className="w-[17px] h-[17px] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function RegionalCorridors() {
  const { regionalCorridors } = content;
  const [active, setActive] = useState(regionalCorridors.tabs[0]);
  const data =
    regionalCorridors.data[active] ||
    regionalCorridors.data[regionalCorridors.tabs[0]];

  return (
    <section
      id="regional-corridors"
      className="py-28 lg:py-40 bg-secondary relative overflow-hidden"
    >
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionKicker>{regionalCorridors.kicker}</SectionKicker>
            <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
              {regionalCorridors.heading}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            {regionalCorridors.intro}
          </p>
        </div>

        <div className="relative bg-[#1e3b5c] text-white p-8 sm:p-10 lg:p-14 rounded-3xl overflow-hidden shadow-[0_40px_90px_-40px_rgba(30,58,95,0.5)]">
          <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#b88f4f]/70"></div>
          <div className="relative">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 text-[#b88f4f] text-[11px] font-semibold uppercase tracking-[0.32em] mb-3">
                  {regionalCorridors.activeLabel}
                </p>
                <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
                  {data.region}
                </h3>
                <p className="text-white/55 text-sm mt-2">{data.hubs}</p>
              </div>
              <span className="flex items-center gap-1.5 text-[#b88f4f]/80 text-[11px] uppercase tracking-[0.2em] font-medium shrink-0 pt-1">
                <CircleAlert className="w-[13px] h-[13px]" />{" "}
                {regionalCorridors.statusLabel}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="flex items-center gap-2 text-white/50 text-[11px] uppercase tracking-[0.22em] mb-2">
                  <TrendingUp className="w-[13px] h-[13px] text-[#b88f4f]" />{" "}
                  {regionalCorridors.gdpLabel}
                </p>
                <p className="font-display text-4xl text-white">{data.gdp}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/50 text-[11px] uppercase tracking-[0.22em] mb-2">
                  <DollarSign className="w-[13px] h-[13px] text-[#b88f4f]" />{" "}
                  {regionalCorridors.fdiLabel}
                </p>
                <p className="font-display text-4xl text-white">{data.fdi}</p>
              </div>
            </div>
            <div className="h-px w-full bg-white/10 my-10"></div>
            <div className="flex items-start gap-4">
              <Briefcase
                className="w-[18px] h-[18px] text-[#b88f4f] shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <p className="text-white/70 text-[15px] sm:text-base leading-relaxed">
                {data.commentary}
              </p>
            </div>
            <div className="h-px w-full bg-white/10 my-10"></div>
            <div>
              <p className="flex items-center gap-2 text-[#b88f4f] text-[11px] font-semibold uppercase tracking-[0.28em] mb-4">
                <Zap className="w-[13px] h-[13px]" />{" "}
                {regionalCorridors.insightLabel}
              </p>
              <p className="font-display italic text-lg sm:text-xl text-white/90 leading-relaxed">
                &ldquo;{data.insightQuote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-3">
            {regionalCorridors.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={
                  tab === active
                    ? "relative text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3.5 rounded-full border transition-all duration-300 bg-[#b88f4f] text-white border-[#b88f4f] shadow-[0_8px_24px_-8px_rgba(197,150,80,0.6)]"
                    : "relative text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3.5 rounded-full border transition-all duration-300 bg-white text-muted-foreground border-border hover:border-[#b88f4f]/60 hover:text-[#1e3b5c]"
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Presence() {
  const { presence } = content;
  return (
    <section
      id="presence"
      className="py-28 lg:py-40  bg-[#1e3b5c] relative overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-[0.08] pointer-events-none"></div>
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center relative">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <SectionKicker>{presence.kicker}</SectionKicker>
          <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-white leading-[1.06] tracking-tight text-balance">
            {presence.heading}
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mt-8">
            {presence.intro}
          </p>
          <ul className="mt-9 space-y-4">
            {presence.locations.map((loc) => (
              <li
                key={loc.city}
                className="flex items-center gap-3 text-white/80"
              >
                <MapPin className="w-4 h-4 text-[#b88f4f] shrink-0" />
                <span className={loc.hq ? "font-medium text-white" : ""}>
                  {loc.city}
                </span>
                {loc.hq && (
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#b88f4f] border border-[#b88f4f]/40 px-2 py-0.5 ml-1">
                    HQ
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative">
            <div className="relative glass-panel rounded-3xl p-4 lg:p-8">
              <img
                src={presence.mapImage}
                alt={presence.mapImageAlt}
                className="w-full h-[26rem] lg:h-[30rem] object-contain"
              />
              {presence.mapPins.map((pin) => (
                <span
                  key={pin.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-sm"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <span className="relative flex items-center justify-center">
                    <span
                      className={`absolute rounded-full bg-[#b88f4f]/25 animate-ping ${pin.size === "lg" ? "w-6 h-6" : "w-4 h-4"}`}
                      style={{ animationDuration: "2.4s" }}
                    ></span>
                    <span
                      className={`relative rounded-full bg-[#b88f4f] shadow-[0_0_10px_2px_rgba(212,164,86,0.6)] ${pin.size === "lg" ? "w-3.5 h-3.5" : "w-2.5 h-2.5"}`}
                    ></span>
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-white/70 bg-[#1e3b5c]/80 px-2 py-1 border border-white/10">
                    {pin.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { contact } = content;
  return (
    <section id="contact" className="py-28 lg:py-40 bg-secondary">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionKicker>{contact.kicker}</SectionKicker>
          <h2 className="font-display font-light text-[2.1rem] lg:text-[3.4rem] tracking-[-0.02em] text-[#1e3b5c] leading-[1.06] tracking-tight text-balance">
            {contact.heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8">
            {contact.intro}
          </p>
          <div className="mt-10 space-y-6">
            {contact.details.map((d) => (
              <div key={d.label} className="border-l-2 border-[#b88f4f] pl-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {d.label}
                </div>
                <div className="font-medium text-charcoal mt-0.5">
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            className="bg-white rounded-3xl border border-border/70 p-8 lg:p-12 shadow-[0_40px_90px_-45px_rgba(15,30,60,0.35)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contact.form.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-charcoal outline-none focus:border-[#b88f4f] focus:ring-2 focus:ring-[#b88f4f]/30 transition"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-charcoal mb-2">
                {contact.form.messageLabel}
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-charcoal outline-none focus:border-[#b88f4f] focus:ring-2 focus:ring-[#b88f4f]/30 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#1e3b5c] text-white font-medium px-8 py-4 shadow-[0_12px_30px_-10px_rgba(30,58,95,0.5)] hover:bg-[#b88f4f] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {contact.form.submitLabel}
              <ArrowUpRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { brand, nav, footer } = content;
  return (
    <footer className=" bg-[#1e3b5c] text-white/65">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="grid place-items-center w-9 h-9 border border-[#b88f4f]/70 text-[#b88f4f] font-display text-lg leading-none">
              {brand.monogram}
            </span>
            <span className="font-display text-lg text-white">
              {brand.name} {brand.tagline}
            </span>
          </div>
          <p className="max-w-md leading-relaxed mb-8">{footer.description}</p>
          <div className="space-y-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3">
                {footer.addressesLabel}
              </div>
              <ul className="space-y-2 text-sm">
                {footer.addresses.map((addr) => (
                  <li key={addr} className="flex gap-3">
                    <MapPin className="w-4 h-4 text-[#b88f4f] flex-shrink-0 mt-0.5" />
                    <span>{addr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-5">
            {footer.navigateLabel}
          </div>
          <ul className="space-y-3">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-[#b88f4f] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-5">
            {footer.getInTouchLabel}
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Phone className="w-4 h-4 text-[#b88f4f] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="text-white/40 text-xs mb-1">
                  {footer.phone.label}
                </div>
                <a
                  href={footer.phone.href}
                  className="hover:text-[#b88f4f] transition-colors"
                >
                  {footer.phone.value}
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MessageCircle className="w-4 h-4 text-[#b88f4f] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="text-white/40 text-xs mb-1">
                  {footer.whatsapp.label}
                </div>
                <div className="space-y-1">
                  {footer.whatsapp.numbers.map((n) => (
                    <a
                      key={n.value}
                      href={n.href}
                      className="block hover:text-[#b88f4f] transition-colors"
                    >
                      {n.value}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail className="w-4 h-4 text-[#b88f4f] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="text-white/40 text-xs mb-1">
                  {footer.email.label}
                </div>
                <a
                  href={footer.email.href}
                  className="hover:text-[#b88f4f] transition-colors"
                >
                  {footer.email.value}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[92rem] px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/45">
          <span>{footer.designed}</span>
          {/* <span>{footer.copyright}</span> */}
          <span className="tracking-wide">{footer.strapline}</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Firm />
        <Services />
        <Plans />
        <Approach />
        <Sectors />
        <Insights />
        <RegionalCorridors />
        <Presence />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
