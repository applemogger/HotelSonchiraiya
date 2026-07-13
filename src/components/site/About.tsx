import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-cream py-28 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
        <Reveal className="relative">
          <img
            src={IMAGES.about}
            alt="Hotel Sonchiraiya's grand interior"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-3 hidden bg-ink px-7 py-6 text-ivory md:block">
            <p className="font-serif text-3xl italic text-bronze-soft">
              Since 1952
            </p>
          </div>
        </Reveal>

        <div className="md:max-w-xl">
          <Reveal>
            <p className="eyebrow">The Hotel</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
              A house with a
              <br />
              <span className="italic text-bronze">point of view.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-muted">
              Hotel Sonchiraiya has welcomed travellers for
              generations. Its rooms balance considered craft with quiet
              comfort, making space for every kind of arrival.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#rooms"
              className="mt-9 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink link-underline"
            >
              Explore the hotel <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
