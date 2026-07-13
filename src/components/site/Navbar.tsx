import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md py-3 border-b border-line"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className={`font-serif text-2xl tracking-wide transition-colors ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          Hotel Sonchiraiya
          <span className="ml-1 text-[10px] tracking-[0.4em] align-middle">
            EST. 1952
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[11px] font-medium uppercase tracking-[0.28em] link-underline transition-colors ${
                scrolled
                  ? "text-ink hover:text-bronze"
                  : "text-ivory hover:text-ivory"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="whatsapp://send?phone=+91-9826054825"
            className={`hidden md:inline-flex items-center px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] border transition-all duration-300 ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-ivory"
                : "border-ivory/70 text-ivory hover:bg-ivory hover:text-ink"
            }`}
          >
            Book a Stay
          </a>
          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden ${scrolled ? "text-ink" : "text-ivory"}`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink text-ivory animate-fade-in">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-serif text-2xl">Hotel Sonchiraiya</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 pt-20">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl tracking-wide hover:text-bronze-soft transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-6 border border-ivory/60 px-8 py-3 text-[11px] uppercase tracking-[0.32em]"
            >
              Book a Stay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
