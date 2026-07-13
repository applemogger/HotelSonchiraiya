import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow">A Guest's Note</p>
        </Reveal>
        <Reveal delay={0.15}>
          <blockquote className="mt-10 font-serif text-3xl italic leading-[1.25] text-ink md:text-4xl lg:text-5xl">
            &ldquo;There are hotels one visits, and hotels one returns to. The
            Hotel Sonchiraiya belongs, without question, to the second kind.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-line" />
            <div className="text-[10px] uppercase tracking-[0.32em] text-ink-muted">
              Condé Nast Traveller
            </div>
            <div className="h-px w-10 bg-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
