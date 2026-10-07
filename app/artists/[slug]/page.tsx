import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Cover from "@/components/Cover";
import { ArticleCard, SongCard } from "@/components/Cards";
import { artists, getArtist, songsByArtist, articlesByArtist } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArtist(slug);
  return a ? { title: a.name, description: a.bio } : {};
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const a = getArtist(slug);
  if (!a) notFound();
  const songs = songsByArtist(slug);
  const items = articlesByArtist(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": a.roles.includes("ব্যান্ড") ? "MusicGroup" : "Person",
    name: a.name,
    description: a.bio,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-8 pb-8 pt-12 md:grid-cols-2">
        <div className="aspect-[3/2] overflow-hidden rounded-md"><Cover seed={a.slug} /></div>
        <div className="self-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{a.name}</h1>
          <p className="mt-2 text-muted">{a.roles.join(", ")} · {a.city} · {a.genre}</p>
          <p className="mt-4 max-w-md text-lg">{a.bio}</p>
        </div>
      </div>

      {songs.length > 0 && (
        <section className="pt-12">
          <h2 className="mb-6 text-2xl font-bold">গান</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">{songs.map((s) => <SongCard key={s.slug} s={s} />)}</div>
        </section>
      )}
      {items.length > 0 && (
        <section className="pt-12">
          <h2 className="mb-6 text-2xl font-bold">এই শিল্পীকে নিয়ে লেখা</h2>
          <div className="grid gap-8 md:grid-cols-3">{items.map((x) => <ArticleCard key={x.slug} a={x} />)}</div>
        </section>
      )}
    </>
  );
}
