import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="font-serif text-4xl">Hotel Sonchiraiya</div>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ivory/60">
            A house of quiet grandeur on the grand boulevard, keeping the
            manners of a hotel from another century.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-ivory/30 p-2.5 transition-colors hover:border-bronze-soft hover:text-bronze-soft"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-ivory/30 p-2.5 transition-colors hover:border-bronze-soft hover:text-bronze-soft"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div
            className="eyebrow"
            style={{ color: "var(--color-bronze-soft)" }}
          >
            Visit
          </div>
          <address className="mt-6 not-italic text-[14px] leading-relaxed text-ivory/75">
            Gwalior Bypass Circular Road
            <br />
            Shivpuri, Madhya Pradesh, India
            <br />
            Open all year
          </address>
        </div>

        <div className="md:col-span-2">
          <div
            className="eyebrow"
            style={{ color: "var(--color-bronze-soft)" }}
          >
            Contact
          </div>
          <ul className="mt-6 space-y-3 text-[14px] text-ivory/75">
            <li>
              <a href="tel:+000" className="link-underline">
                +00 000 00 00
              </a>
            </li>
            <li>
              <a href="mailto:hello@hotelsonchiraiya.com" className="link-underline">
                hello@hotelsonchiraiya.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div
            className="eyebrow"
            style={{ color: "var(--color-bronze-soft)" }}
          >
            Newsletter
          </div>
          <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex border-b border-ivory/30 focus-within:border-ivory">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent py-2 text-[13px] text-ivory placeholder:text-ivory/40 outline-none"
              />
              <button className="text-[11px] uppercase tracking-[0.24em] text-bronze-soft hover:text-ivory">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-6 text-[11px] uppercase tracking-[0.28em] text-ivory/40 md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} Hotel Sonchiraiya</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ivory">
              Privacy
            </a>
            <a href="#" className="hover:text-ivory">
              Terms
            </a>
            <a href="#" className="hover:text-ivory">
              Press
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
