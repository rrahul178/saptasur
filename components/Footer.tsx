import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">সপ্তসুর</p>
          <p className="mt-2 max-w-xs text-muted">বাংলা গান, শিল্পী আর সংস্কৃতির ডিজিটাল ঘর।</p>
        </div>
        <nav aria-label="আরও" className="flex flex-col gap-1">
          <Link href="/map" className="hover:text-accent">বাংলাদেশের গানের মানচিত্র</Link>
          <Link href="/events" className="hover:text-accent">ইভেন্ট</Link>
          <Link href="/podcast" className="hover:text-accent">পডকাস্ট</Link>
          <Link href="/archive" className="hover:text-accent">সংগীত আর্কাইভ</Link>
        </nav>
        <p className="text-sm text-muted">
          এই সাইটের শিল্পী, গান ও লেখা এখন ডেমো কনটেন্ট। আসল কনটেন্ট যোগ করার আগে data/content.ts বদলে নিন।
        </p>
      </div>
    </footer>
  );
}
