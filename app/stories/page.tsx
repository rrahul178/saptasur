import type { Metadata } from "next";
import { ArticleCard, PageHead } from "@/components/Cards";
import { articlesByKind } from "@/data/content";

export const metadata: Metadata = { title: "গল্প" };

export default function Page() {
  return (
    <>
      <PageHead title="গল্প" intro="সংগীতের ইতিহাস, সংস্কৃতি আর চলমান প্রবণতা।" />
      <div className="grid gap-8 md:grid-cols-3">
        {articlesByKind("story").map((a) => <ArticleCard key={a.slug} a={a} />)}
      </div>
    </>
  );
}
