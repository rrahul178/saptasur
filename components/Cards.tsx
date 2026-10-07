import Link from "next/link";
import Cover from "./Cover";
import { Article, Song, Artist, kindLabel, artistName } from "@/data/content";

export function ArticleCard({ a }: { a: Article }) {
  return (
    <article className="group">
      <Link href={`/articles/${a.slug}`}>
        <div className="aspect-[4/3] overflow-hidden rounded-md">
          <Cover seed={a.slug} />
        </div>
        <p className="mt-3 text-sm text-muted">
          {kindLabel[a.kind]}, {a.date}
        </p>
        <h3 className="mt-1 text-xl font-bold group-hover:underline">{a.title}</h3>
        <p className="mt-1 text-muted">{a.excerpt}</p>
      </Link>
    </article>
  );
}

export function SongCard({ s }: { s: Song }) {
  return (
    <article>
      <a href={s.url} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="aspect-square overflow-hidden rounded-md">
          <Cover seed={s.slug} />
        </div>
        <h3 className="mt-3 text-lg font-bold group-hover:underline">{s.title}</h3>
      </a>
      <p className="text-muted">
        <Link href={`/artists/${s.artistSlug}`} className="hover:underline">{artistName(s.artistSlug)}</Link>
      </p>
      <p className="text-sm text-muted">{s.genre}, {s.released}</p>
    </article>
  );
}

export function ArtistCard({ a }: { a: Artist }) {
  return (
    <Link href={`/artists/${a.slug}`} className="group block rounded-md border border-line bg-surface p-5">
      <div className="aspect-[3/2] overflow-hidden rounded">
        <Cover seed={a.slug} />
      </div>
      <h3 className="mt-4 text-xl font-bold group-hover:underline">{a.name}</h3>
      <p className="text-muted">{a.roles.join(", ")} · {a.city}</p>
    </Link>
  );
}

export function PageHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="pb-8 pt-12">
      <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
      {intro && <p className="mt-3 max-w-xl text-lg text-muted">{intro}</p>}
    </div>
  );
}
