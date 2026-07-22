import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCardsSection from "./components/FeatureCardsSection";
import IndustriesSection from "./components/IndustriesSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LogoStripSection from "./components/LogoStripSection";
import CallBackSection from "./components/CallBackSection";
import CasesSection from "./components/CasesSection";
import CtaBannerSection from "./components/CtaBannerSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Header />
      <HeroSection />
      <FeatureCardsSection />
      <IndustriesSection />
      <ExperienceSection />
      <TestimonialsSection />
      {/* <LogoStripSection /> */}
      <CallBackSection />
      {/* <CasesSection /> */}
      <CtaBannerSection />
      {/* <NewsSection /> */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
