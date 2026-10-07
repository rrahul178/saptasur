import type { Metadata } from "next";
import { PageHead, SongCard } from "@/components/Cards";
import { songs } from "@/data/content";

export const metadata: Metadata = { title: "নতুন গান" };

export default function MusicPage() {
  return (
    <>
      <PageHead title="নতুন গান" intro="সদ্য প্রকাশিত বাংলা গান। প্রতিটি গানে অফিশিয়াল লিংকে যাওয়া যাবে।" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {songs.map((s) => <SongCard key={s.slug} s={s} />)}
      </div>
    </>
  );
}
