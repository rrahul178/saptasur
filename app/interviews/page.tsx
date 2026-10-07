import type { Metadata } from "next";
import { ArticleCard, PageHead } from "@/components/Cards";
import { articlesByKind } from "@/data/content";

export const metadata: Metadata = { title: "সাক্ষাৎকার" };

export default function Page() {
  return (
    <>
      <PageHead title="সাক্ষাৎকার" intro="শিল্পীদের নিজের কথায় তাঁদের সংগীতযাত্রা।" />
      <div className="grid gap-8 md:grid-cols-3">
        {articlesByKind("interview").map((a) => <ArticleCard key={a.slug} a={a} />)}
      </div>
    </>
  );
}
