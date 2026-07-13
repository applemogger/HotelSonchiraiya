import { IMAGES } from "@/data/site";
import { Reveal } from "./Reveal";

export function Dining() {
  return (
    <section
      id="dining"
      className="relative bg-ink text-ivory py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="order-2 lg:order-1 lg:col-span-6 lg:pt-10">
          <Reveal>
            <p
              className="eyebrow"
              style={{ color: "var(--color-bronze-soft)" }}
            >
              Dining
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              Dinner is served
              <br />
              <span className="italic text-bronze-soft">by candlelight.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="my-10 h-px w-24 bg-bronze-soft/60" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="max-w-lg text-[15px] leading-relaxed text-ivory/75">
              At Salon Sonchiraiya, our chef writes a short daily menu around the
              market and the cellar — three courses, a good glass of wine, and a
              room that has kept its promise since 1952.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <Item name="Salon Sonchiraiya" meta="Seasonal · Dinner only" />
              <Item name="Bar Alcove" meta="Vermouth · Small plates" />
              <Item name="Le Jardin" meta="Breakfast · Courtyard" />
              <Item name="Rooftop Bar" meta="Cocktails · From 18:00" />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <a
              href="#book"
              className="mt-12 inline-block border border-ivory/60 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all hover:bg-ivory hover:text-ink"
            >
              Reserve a Table
            </a>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2 lg:col-span-6">
          <img
            src={IMAGES.restaurant}
            alt="Salon Sonchiraiya by candlelight"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Item({ name, meta }: { name: string; meta: string }) {
  return (
    <div>
      <h4 className="font-serif text-xl">{name}</h4>
      <div className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-ivory/50">
        {meta}
      </div>
    </div>
  );
}
