import type { Metadata } from "next";
import { PageHead } from "@/components/Cards";
import { decades } from "@/data/content";

export const metadata: Metadata = { title: "সংগীত আর্কাইভ" };

export default function ArchivePage() {
  return (
    <>
      <PageHead title="বাংলা গানের কালপঞ্জি" intro="দশকে দশকে বাংলা গান কীভাবে বদলেছে। প্রতিটি দশকে গান, শিল্পী, ব্যান্ড আর অ্যালবাম যোগ করুন।" />
      <ol className="border-l-2 border-ink pl-6">
        {decades.map((d) => (
          <li key={d.label} className="pb-10">
            <h2 className="text-2xl font-bold">{d.label}-এর দশক</h2>
            <p className="mt-1 text-lg text-muted">{d.theme}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
