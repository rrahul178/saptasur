import Link from "next/link";
import Swaras from "@/components/Swaras";
import Cover from "@/components/Cover";
import Newsletter from "@/components/Newsletter";
import { ArticleCard, SongCard } from "@/components/Cards";
import { articles, songs, artists, events, episodes, decades, regions, artistName } from "@/data/content";

function Section({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <section className="pt-20">
      <div className="mb-6 flex items-baseline justify-between border-b border-line pb-3">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {href && <Link href={href} className="text-muted hover:text-accent">সব দেখুন</Link>}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const featured = articles[0];
  const spotlight = artists[0];
  const trending = songs.filter((s) => s.trending);
  const latest = articles.slice(1, 4);

  return (
    <>
      <section className="grid items-end gap-10 pb-4 pt-12 md:grid-cols-2">
        <div>
          <h1 className="font-display text-6xl font-extrabold sm:text-8xl">সপ্তসুর</h1>
          <p className="mt-5 max-w-md text-xl text-muted">
            বাংলা গান, শিল্পী আর সংস্কৃতির ডিজিটাল ঘর। সাতটি সুরের যেকোনোটি ধরে ঢুকে পড়ুন।
          </p>
        </div>
        <Swaras />
      </section>

      <section className="pt-16">
        <Link href={`/articles/${featured.slug}`} className="group grid gap-6 md:grid-cols-5">
          <div className="aspect-[4/3] overflow-hidden rounded-md md:col-span-3">
            <Cover seed={featured.slug} />
          </div>
          <div className="self-center md:col-span-2">
            <p className="text-muted">আজকের প্রধান গল্প</p>
            <h2 className="mt-2 text-3xl font-bold group-hover:underline sm:text-4xl">{featured.title}</h2>
            <p className="mt-3 text-lg text-muted">{featured.excerpt}</p>
          </div>
        </Link>
      </section>

      <Section title="এখন সবচেয়ে বেশি শোনা হচ্ছে" href="/music">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {trending.map((s) => <SongCard key={s.slug} s={s} />)}
        </div>
      </Section>

      <Section title="সপ্তাহের শিল্পী" href="/artists">
        <Link href={`/artists/${spotlight.slug}`} className="group grid gap-6 md:grid-cols-2">
          <div className="aspect-[3/2] overflow-hidden rounded-md"><Cover seed={spotlight.slug} /></div>
          <div className="self-center">
            <h3 className="text-3xl font-bold group-hover:underline">{spotlight.name}</h3>
            <p className="text-muted">{spotlight.roles.join(", ")} · {spotlight.city}</p>
            <p className="mt-3 max-w-md text-lg">{spotlight.bio}</p>
          </div>
        </Link>
      </Section>

      <Section title="নতুন গল্প, রিভিউ আর সাক্ষাৎকার">
        <div className="grid gap-8 md:grid-cols-3">
          {latest.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </Section>

      <Section title="বাংলা গানের কালপঞ্জি" href="/archive">
        <ol className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {decades.map((d) => (
            <li key={d.label} className="rounded-md border border-line bg-surface p-3 text-center">
              <p className="font-display text-xl font-bold">{d.label}-এর দশক</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="বাংলাদেশের গানের মানচিত্র" href="/map">
        <p className="max-w-xl text-lg text-muted">
          {regions.map((r) => r.name).join(", ")}: প্রতিটি অঞ্চলের নিজস্ব সুর আর গানের ঐতিহ্য।
        </p>
      </Section>

      <Section title="পডকাস্ট: সপ্তসুর সেশনস" href="/podcast">
        <ul className="divide-y divide-line">
          {episodes.slice(0, 2).map((e) => (
            <li key={e.slug} className="py-4">
              <p className="font-bold">{e.title}</p>
              <p className="text-muted">{e.summary} ({e.length})</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="আসন্ন ইভেন্ট" href="/events">
        <ul className="divide-y divide-line">
          {events.map((e) => (
            <li key={e.slug} className="flex flex-wrap justify-between gap-2 py-4">
              <span className="font-bold">{e.title}</span>
              <span className="text-muted">{e.city}, {e.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="pt-20"><Newsletter /></div>
    </>
  );
}
