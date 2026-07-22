import { footerLinks as siteFooterLinks } from "../data/site";

const footerLinks = siteFooterLinks as unknown as typeof siteFooterLinks;

export default function FooterSection() {
  return (
    <footer className="bg-[#0A1128] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-[60px] lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto brightness-0 invert"
            />
          </div>
          <h3 className="text-3xl font-extrabold">Headquarters</h3>
          <p className="mt-4 max-w-sm text-[#E0A83B]">
            KANK Consults — Strategic Systems and Human Capital, Ga West, Accra
          </p>
          <div className="mt-5 space-y-3 text-[#E0A83B]">
            <p>0504 453 099</p>
            <p>principalconsultant@kankconsults.com</p>
            <p>kankconsults.com</p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <span className="text-sm font-bold tracking-[0.2em] text-white">
              Our Locations
            </span>
          </div>
          <h3 className="text-3xl font-extrabold">Where to find us?</h3>
          <img
            src="/footer-map.png"
            alt="Footer map"
            className="mt-5 max-w-[220px]"
          />
        </div>

        <div className="self-end pb-2 text-[#E0A83B]">
          <p className="mb-4">London: 020 7946 0020</p>
          <p className="mb-4">Ontario: 613 285 5534</p>
          <p>Tokyo: 0428 298 114</p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D48C2B]" />
            <span className="text-sm font-bold tracking-[0.2em] text-white">
              Get in Touch
            </span>
          </div>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-auto brightness-0 invert"
          />
          <h3 className="mt-4 text-3xl font-extrabold">Social links</h3>
          <p className="mt-4 max-w-sm text-[#E0A83B]">
            Taking seamless key performance indicators offline to maximise the
            long tail.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["f", "x", "p", "in"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D48C2B] text-sm font-bold text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm md:px-[60px] lg:flex-row lg:items-center lg:justify-between">
          <p>
            Copyright by <strong>BoldThemes</strong>. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 font-semibold uppercase tracking-[0.16em]">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/85 transition-opacity hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
