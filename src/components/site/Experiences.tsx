import { EXPERIENCES, IMAGES } from "@/data/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Experiences() {
  return (
    <section id="experiences" className="bg-cream py-28 md:py-40">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-20 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Experiences</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
              The house, and
              <br />
              <span className="italic text-bronze">a city beyond.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-muted">
              Our concierge keeps a small black book of the city's quieter
              pleasures — a private opening, a hidden cellar, a garden usually
              closed to the public.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <img
              src={IMAGES.experience}
              alt="Rooftop at golden hour"
              className="mt-14 hidden aspect-[4/3] w-full object-cover lg:block"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-line">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <li>
                  <a
                    href="#book"
                    className="group flex items-center justify-between gap-6 border-b border-line py-8 transition-colors hover:bg-ivory/60 md:py-10"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="font-mono text-[11px] text-bronze">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl text-ink md:text-3xl">
                          {e.title}
                        </h3>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                          {e.meta}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze" />
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
