"use client";
import Link from "next/link";
import { useState } from "react";

type Item = { title: string; sub: string; href: string; text: string };

export default function SearchClient({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const results = term ? items.filter((i) => i.text.toLowerCase().includes(term)) : [];
  return (
    <div>
      <label htmlFor="q" className="sr-only">খোঁজার শব্দ</label>
      <input
        id="q"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="যেমন: মেঘনা, ইলেকট্রনিক, রিভিউ"
        className="w-full max-w-xl rounded border border-line bg-surface px-4 py-3 text-lg"
      />
      <ul className="mt-6 divide-y divide-line">
        {results.map((r, i) => (
          <li key={i} className="py-4">
            <Link href={r.href} className="text-lg font-bold hover:underline">{r.title}</Link>
            <p className="text-muted">{r.sub}</p>
          </li>
        ))}
      </ul>
      {term && results.length === 0 && <p className="mt-6 text-muted">“{q}” দিয়ে কিছু পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।</p>}
    </div>
  );
}
