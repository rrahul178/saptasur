import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cover from "@/components/Cover";
import { articles, getArticle, getArtist, kindLabel, kindPath } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? { title: a.title, description: a.excerpt, openGraph: { title: a.title, description: a.excerpt, type: "article" } } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const artist = a.artistSlug ? getArtist(a.artistSlug) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    author: { "@type": "Organization", name: a.author },
    inLanguage: "bn",
  };

  return (
    <article className="mx-auto max-w-3xl pb-8 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href={kindPath[a.kind]} className="text-muted hover:text-accent">{kindLabel[a.kind]}</Link>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">{a.title}</h1>
      <p className="mt-3 text-muted">{a.author}, {a.date}</p>
      <div className="my-8 aspect-[16/9] overflow-hidden rounded-md"><Cover seed={a.slug} /></div>
      {a.score && <p className="mb-6 font-display text-3xl font-bold">স্কোর: {a.score}</p>}
      <div className="prose-body">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
      {artist && (
        <p className="mt-8 border-t border-line pt-6">
          শিল্পীর প্রোফাইল: <Link href={`/artists/${artist.slug}`} className="font-bold underline">{artist.name}</Link>
        </p>
      )}
    </article>
  );
}
