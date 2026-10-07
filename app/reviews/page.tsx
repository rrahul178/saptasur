import type { Metadata } from "next";
import { ArticleCard, PageHead } from "@/components/Cards";
import { articlesByKind } from "@/data/content";

export const metadata: Metadata = { title: "রিভিউ" };

export default function Page() {
  return (
    <>
      <PageHead title="রিভিউ" intro="গান ও অ্যালবামের খোলামেলা মূল্যায়ন।" />
      <div className="grid gap-8 md:grid-cols-3">
        {articlesByKind("review").map((a) => <ArticleCard key={a.slug} a={a} />)}
      </div>
    </>
  );
}
