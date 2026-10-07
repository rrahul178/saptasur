"use client";
import { useState } from "react";

// এখনো ব্যাকএন্ড নেই। পরে Supabase/Buttondown/Mailchimp-এর সঙ্গে জুড়বেন।
export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="rounded-md bg-ink p-8 text-bg sm:p-12">
      <h2 className="text-3xl font-bold">সপ্তাহের সেরা গান আর গল্প, ইনবক্সে</h2>
      {done ? (
        <p className="mt-4 text-lg">ধন্যবাদ, আপনার ইমেইল নেওয়া হয়েছে।</p>
      ) : (
        <div className="mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">ইমেইল</label>
          <input id="email" type="email" placeholder="আপনার ইমেইল" className="flex-1 rounded px-4 py-3 text-[#1a1a2e]" />
          <button onClick={() => setDone(true)} className="rounded bg-accent px-6 py-3 font-semibold text-[#1a1a2e]">
            সাবস্ক্রাইব করুন
          </button>
        </div>
      )}
    </section>
  );
}
