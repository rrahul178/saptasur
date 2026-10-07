import Link from "next/link";
import { swaras } from "@/data/content";

// সাতটি সুর = সাইটের সাতটি দরজা। এটিই হোমপেজের প্রধান নেভিগেশন।
export default function Swaras() {
  return (
    <nav aria-label="সাত সুর" className="grid h-72 grid-cols-7 items-end gap-2 sm:h-96 sm:gap-3">
      {swaras.map((s, i) => (
        <Link
          key={s.href}
          href={s.href}
          style={{ height: `${s.h}%`, animationDelay: `${i * 90}ms` }}
          className="swara flex flex-col items-center justify-between rounded-t-md bg-ink px-1 py-3 text-bg transition-colors hover:bg-accent hover:text-[#1a1a2e]"
        >
          <span className="font-display text-xl font-bold sm:text-3xl">{s.sa}</span>
          <span className="text-sm [writing-mode:vertical-rl] sm:text-base">{s.label}</span>
        </Link>
      ))}
    </nav>
  );
}
