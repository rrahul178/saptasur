import type { Metadata } from "next";
import { PageHead } from "@/components/Cards";
import { regions } from "@/data/content";

export const metadata: Metadata = { title: "বাংলাদেশের গানের মানচিত্র" };

export default function MapPage() {
  return (
    <>
      <PageHead title="বাংলাদেশের গানের মানচিত্র" intro="অঞ্চল ধরে গানের ঐতিহ্য। পরে এখানে ইন্টারঅ্যাক্টিভ মানচিত্র বসানো যাবে।" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {regions.map((r) => (
          <section key={r.name} className="rounded-md border border-line bg-surface p-5">
            <h2 className="text-xl font-bold">{r.name}</h2>
            <p className="mt-1 font-medium">{r.tradition}</p>
            <p className="mt-1 text-muted">{r.note}</p>
          </section>
        ))}
      </div>
    </>
  );
}
