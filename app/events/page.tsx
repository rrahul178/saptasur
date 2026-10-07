import type { Metadata } from "next";
import { PageHead } from "@/components/Cards";
import { events } from "@/data/content";

export const metadata: Metadata = { title: "ইভেন্ট" };

export default function EventsPage() {
  return (
    <>
      <PageHead title="ইভেন্ট" intro="কনসার্ট, লাইভ সেশন আর সংগীত আসর।" />
      <ul className="divide-y divide-line border-y border-line">
        {events.map((e) => (
          <li key={e.slug} className="flex flex-wrap items-center justify-between gap-3 py-5">
            <div>
              <h2 className="text-xl font-bold">{e.title}</h2>
              <p className="text-muted">{e.venue}, {e.city}, {e.date}</p>
            </div>
            <a href={e.ticketUrl} className="rounded bg-ink px-5 py-2 text-bg hover:bg-accent hover:text-[#1a1a2e]">টিকিট নিন</a>
          </li>
        ))}
      </ul>
    </>
  );
}
