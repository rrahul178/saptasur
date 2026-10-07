import type { Metadata } from "next";
import { PageHead } from "@/components/Cards";
import { episodes } from "@/data/content";

export const metadata: Metadata = { title: "পডকাস্ট" };

export default function PodcastPage() {
  return (
    <>
      <PageHead title="সপ্তসুর সেশনস" intro="শিল্পী আর সংগীতকর্মীদের সঙ্গে দীর্ঘ আলাপ।" />
      <ul className="divide-y divide-line border-y border-line">
        {episodes.map((e) => (
          <li key={e.slug} className="py-5">
            <h2 className="text-xl font-bold">{e.title}</h2>
            <p className="mt-1">{e.summary}</p>
            <p className="text-muted">{e.date}, {e.length}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
