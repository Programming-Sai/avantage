import { logoStrip } from "../data/site";

const logos = logoStrip as unknown as typeof logoStrip;

export default function LogoStripSection() {
  return (
    <section className="overflow-hidden bg-[#1A1A1A] py-10">
      <div className="logo-strip">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <span key={`${logo}-${index}`} className="logo-item">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
