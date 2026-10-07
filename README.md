# সপ্তসুর

বাংলা গান ও সংস্কৃতির ডিজিটাল ম্যাগাজিন। Next.js + TypeScript + Tailwind CSS।

## লোকালি চালান
```bash
npm install
npm run dev
```
http://localhost:3000 খুলুন।

## GitHub + Vercel ডিপ্লয়
```bash
git init
git add .
git commit -m "Saptasur MVP"
git branch -M main
git remote add origin https://github.com/<আপনার-ইউজারনেম>/saptasur.git
git push -u origin main
```
তারপর vercel.com → Add New → Project → `saptasur` রিপো ইম্পোর্ট → Deploy।
ডোমেইন পাওয়ার পর Vercel-এর Environment Variables-এ `NEXT_PUBLIC_SITE_URL` সেট করুন (sitemap ও SEO-র জন্য)।

## কনটেন্ট বদলানো
সব ডেমো কনটেন্ট `data/content.ts` ফাইলে। শিল্পী, গান, লেখা, ইভেন্ট, পডকাস্ট, আর্কাইভ, মানচিত্র সব সেখানে।
নতুন লেখা যোগ করতে `articles` অ্যারেতে একটি অবজেক্ট বসান। গানের `url`-এ YouTube/Spotify লিংক দিন।
সব শিল্পী, গান ও লেখা কাল্পনিক ডেমো। প্রকাশের আগে বদলে নিন।

## পরের ধাপ
- Supabase বা Sanity CMS জুড়ে কনটেন্ট ডাটাবেসে নেওয়া
- সত্যিকারের ছবি (এখন সাত সুরের জেনারেটেড কভার)
- নিউজলেটারের ব্যাকএন্ড (`components/Newsletter.tsx`)
- মিউজিক প্লেয়ার, শিল্পীর সাবমিশন ফর্ম, কমিউনিটি
