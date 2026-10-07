import type { Metadata } from "next";
import { PageHead } from "@/components/Cards";
import SearchClient from "@/components/SearchClient";
import { artists, articles, songs, artistName, kindLabel } from "@/data/content";

export const metadata: Metadata = { title: "খুঁজুন" };

export default function SearchPage() {
  const items = [
    ...artists.map((a) => ({ title: a.name, sub: "শিল্পী", href: `/artists/${a.slug}`, text: `${a.name} ${a.genre} ${a.city}` })),
    ...songs.map((s) => ({ title: s.title, sub: `গান, ${artistName(s.artistSlug)}`, href: `/artists/${s.artistSlug}`, text: `${s.title} ${artistName(s.artistSlug)} ${s.genre}` })),
    ...articles.map((a) => ({ title: a.title, sub: kindLabel[a.kind], href: `/articles/${a.slug}`, text: `${a.title} ${a.excerpt}` })),
  ];
  return (
    <>
      <PageHead title="খুঁজুন" intro="শিল্পী, গান আর লেখা এক জায়গায় খুঁজুন।" />
      <SearchClient items={items} />
    </>
  );
}
