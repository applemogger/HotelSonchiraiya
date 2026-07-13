import { IMAGES } from "@/data/site";
import { Reveal } from "./Reveal";

export function Wellness() {
  return (
    <section id="wellness" className="relative">
      <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={IMAGES.spa}
          alt="Hotel Sonchiraiya spa pool"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 md:px-10">
          <div className="max-w-xl text-ivory">
            <Reveal>
              <p
                className="eyebrow"
                style={{ color: "var(--color-bronze-soft)" }}
              >
                Wellness
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
                Water, stone,
                <br />
                <span className="italic text-bronze-soft">
                  and long silences.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/80">
                A vaulted pool, a hammam of warm limestone, and a small team of
                therapists trained in the old European tradition. Guests receive
                complimentary access from six in the morning until ten at night.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#book" className="mt-10 inline-block btn-outline">
                Reserve a Treatment
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
