import type { Metadata } from "next";
import { ArtistCard, PageHead } from "@/components/Cards";
import { artists } from "@/data/content";

export const metadata: Metadata = { title: "শিল্পী" };

export default function ArtistsPage() {
  return (
    <>
      <PageHead title="শিল্পী" intro="বাংলাদেশ ও পশ্চিমবঙ্গের শিল্পী ও ব্যান্ডের প্রোফাইল।" />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {artists.map((a) => <ArtistCard key={a.slug} a={a} />)}
      </div>
    </>
  );
}
