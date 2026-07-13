import { Calendar, Users } from "lucide-react";
import { Reveal } from "./Reveal";

export function BookingBar() {
  return (
    <div id="book" className="relative z-20 -mt-14 px-6 md:px-10">
      <Reveal className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-px overflow-hidden bg-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] md:grid-cols-[1fr_1fr_1fr_auto]">
          <Field
            icon={<Calendar className="h-4 w-4" />}
            label="Arrival"
            value="Fri, 14 Aug"
          />
          <Field
            icon={<Calendar className="h-4 w-4" />}
            label="Departure"
            value="Mon, 17 Aug"
          />
          <Field
            icon={<Users className="h-4 w-4" />}
            label="Guests"
            value="2 Adults · 1 Room"
          />
          <button className="bg-ink px-10 py-6 text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-bronze">
            Check availability
          </button>
        </div>
      </Reveal>
    </div>
  );
}

function Field({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-ivory px-6 py-5 text-left transition-colors hover:bg-cream">
      <span className="text-bronze">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.32em] text-ink-muted">
          {label}
        </div>
        <div className="mt-0.5 font-serif text-lg text-ink">{value}</div>
      </div>
    </div>
  );
}
