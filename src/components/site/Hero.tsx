import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <motion.img
        src={IMAGES.hero}
        alt="Hotel Sonchiraiya facade at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[11px] font-medium uppercase tracking-[0.4em] text-bronze-soft"
        >
          A Grand Hotel · Since 1952
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[92px]"
        >
          The art of the
          <br />
          <span className="italic text-bronze-soft">unhurried</span> stay.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#rooms" className="btn-outline">
            Discover Rooms
          </a>
          <a
            href="#book"
            className="text-[11px] uppercase tracking-[0.32em] text-ivory link-underline"
          >
            Reserve a table
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/80"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>

      {/* Side vertical caption */}
      <div className="pointer-events-none absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.4em] text-ivory/70 lg:block">
        Hotel Sonchiraiya
      </div>
    </section>
  );
}
