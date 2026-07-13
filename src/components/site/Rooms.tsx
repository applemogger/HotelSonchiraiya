import { ArrowUpRight } from "lucide-react";
import { ROOMS } from "@/data/site";
import { Reveal } from "./Reveal";

export function Rooms() {
  return (
    <section id="rooms" className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-16 grid grid-cols-1 items-end gap-8 md:mb-24 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Rooms & Suites</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
                Rooms that keep
                <br />
                <span className="italic text-bronze">their own time.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-muted md:justify-self-end">
              One hundred and twenty-six rooms and suites, each dressed by hand
              — cotton sheets from Portugal, marble from Carrara, and the
              particular quiet of double-glazed windows over the boulevard.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {ROOMS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.12}>
              <article className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  <div className="absolute right-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-ink">
                    {r.size}
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl text-ink">{r.name}</h3>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-bronze">
                      {r.price}
                    </span>
                  </div>
                  <div className="hairline my-4 w-12" />
                  <p className="text-[14px] leading-relaxed text-ink-muted">
                    {r.desc}
                  </p>
                  <a
                    href="#book"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink link-underline"
                  >
                    Discover <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
