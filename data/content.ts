// ডেমো কনটেন্ট — সব শিল্পী, গান ও লেখা কাল্পনিক। পরে Supabase/CMS থেকে আনলে শুধু এই ফাইলটি বদলাবে।

export type Artist = {
  slug: string;
  name: string;
  roles: string[];
  city: string;
  genre: string;
  bio: string;
};

export type Song = {
  slug: string;
  title: string;
  artistSlug: string;
  genre: string;
  released: string;
  album?: string;
  trending?: boolean;
  url: string; // YouTube/Spotify লিংক এখানে বসান
};

export type ArticleKind = "story" | "review" | "interview";

export type Article = {
  slug: string;
  kind: ArticleKind;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  artistSlug?: string;
  score?: string; // শুধু রিভিউর জন্য
  body: string[];
};

export type EventItem = { slug: string; title: string; venue: string; city: string; date: string; ticketUrl: string };
export type Episode = { slug: string; title: string; length: string; summary: string; date: string };
export type Region = { name: string; tradition: string; note: string };
export type Decade = { label: string; theme: string };

export const kindLabel: Record<ArticleKind, string> = {
  story: "গল্প",
  review: "রিভিউ",
  interview: "সাক্ষাৎকার",
};
export const kindPath: Record<ArticleKind, string> = {
  story: "/stories",
  review: "/reviews",
  interview: "/interviews",
};

export const artists: Artist[] = [
  {
    slug: "meghna-rahman",
    name: "মেঘনা রহমান",
    roles: ["গায়ক", "গীতিকার"],
    city: "ঢাকা",
    genre: "ফোক-ফিউশন",
    bio: "লোকগানের সুরকে আধুনিক বিন্যাসে শোনানোর জন্য পরিচিত। নদী আর শহরের টানাপোড়েন তাঁর গানের বড় বিষয়।",
  },
  {
    slug: "turjo-ahmed",
    name: "তূর্য আহমেদ",
    roles: ["সুরকার", "প্রযোজক"],
    city: "চট্টগ্রাম",
    genre: "ইন্ডি ইলেকট্রনিক",
    bio: "বেডরুম স্টুডিও থেকে শুরু করা প্রযোজক। হারমোনিয়াম আর সিনথের মিশ্রণে তাঁর নিজস্ব শব্দ তৈরি হয়েছে।",
  },
  {
    slug: "niladri-das",
    name: "নীলাদ্রি দাস",
    roles: ["গায়ক", "গিটারিস্ট"],
    city: "কলকাতা",
    genre: "আধুনিক বাংলা গান",
    bio: "সহজ কথা আর অ্যাকুস্টিক গিটারে শহুরে একাকিত্বের গান লেখেন।",
  },
  {
    slug: "brishtipat",
    name: "বৃষ্টিপাত",
    roles: ["ব্যান্ড"],
    city: "সিলেট",
    genre: "অল্টারনেটিভ রক",
    bio: "চার বন্ধুর ব্যান্ড। লাইভ পারফরম্যান্সে তাদের শক্তি সবচেয়ে বেশি ধরা পড়ে।",
  },
];

export const songs: Song[] = [
  { slug: "nodir-opare", title: "নদীর ওপারে", artistSlug: "meghna-rahman", genre: "ফোক-ফিউশন", released: "১ অক্টোবর ২০২৬", album: "জলছবি", trending: true, url: "https://www.youtube.com/" },
  { slug: "shohor-ghumay", title: "শহর ঘুমায়", artistSlug: "niladri-das", genre: "আধুনিক", released: "২৪ সেপ্টেম্বর ২০২৬", trending: true, url: "https://www.youtube.com/" },
  { slug: "megher-por", title: "মেঘের পর", artistSlug: "turjo-ahmed", genre: "ইলেকট্রনিক", released: "১৮ সেপ্টেম্বর ২০২৬", album: "সিগন্যাল", trending: true, url: "https://www.youtube.com/" },
  { slug: "tin-nombor-plot", title: "তিন নম্বর প্ল্যাটফর্ম", artistSlug: "brishtipat", genre: "অল্টারনেটিভ রক", released: "১০ সেপ্টেম্বর ২০২৬", album: "শেষ ট্রেন", url: "https://www.youtube.com/" },
  { slug: "jolchobi", title: "জলছবি", artistSlug: "meghna-rahman", genre: "ফোক-ফিউশন", released: "২৮ আগস্ট ২০২৬", album: "জলছবি", url: "https://www.youtube.com/" },
  { slug: "radio-ghor", title: "রেডিও ঘর", artistSlug: "turjo-ahmed", genre: "ইলেকট্রনিক", released: "১৫ আগস্ট ২০২৬", album: "সিগন্যাল", url: "https://www.youtube.com/" },
];

export const articles: Article[] = [
  {
    slug: "notun-projonmo-bodlano-ruchi",
    kind: "story",
    title: "বাংলা গানের নতুন প্রজন্ম: বদলে যাচ্ছে শ্রোতার রুচি",
    excerpt: "স্ট্রিমিং আর শর্ট ভিডিওর যুগে গান কীভাবে লেখা হচ্ছে, আর কীভাবে শোনা হচ্ছে।",
    author: "সপ্তসুর ডেস্ক",
    date: "৫ অক্টোবর ২০২৬",
    body: [
      "একসময় একটি গান শ্রোতার কাছে পৌঁছাতে ক্যাসেট, রেডিও আর টেলিভিশনের ওপর নির্ভর করত। এখন একজন শিল্পী নিজের ঘরে বসে গান বানিয়ে একই রাতে হাজার মানুষের কাছে পৌঁছে দিতে পারেন।",
      "এই বদলের ফলে গানের গড়নও বদলেছে। ভূমিকা ছোট হয়েছে, কোরাস আগে আসছে, আর অনেক শিল্পী একটি পূর্ণ অ্যালবামের বদলে একটি একটি করে গান প্রকাশ করছেন।",
      "তবে শ্রোতার রুচি শুধু ছোট হয়নি, বৈচিত্র্যও বেড়েছে। লোকগানের নতুন বিন্যাস, ইন্ডি ইলেকট্রনিক আর ব্যান্ডের গান এখন একই প্লেলিস্টে জায়গা পাচ্ছে।",
    ],
  },
  {
    slug: "harmonium-theke-synth",
    kind: "story",
    title: "হারমোনিয়াম থেকে সিনথ: বাংলা গানের যন্ত্রযাত্রা",
    excerpt: "যন্ত্র বদলালে গানের মেজাজও বদলায়। সেই বদলের ছোট একটি ইতিহাস।",
    author: "সপ্তসুর ডেস্ক",
    date: "২৮ সেপ্টেম্বর ২০২৬",
    body: [
      "হারমোনিয়াম বাংলা গানের ঘরোয়া আসরের প্রধান সঙ্গী। আজও সেই যন্ত্র নতুন প্রজন্মের প্রযোজকদের স্টুডিওতে ফিরে আসছে।",
      "সিনথেসাইজারের সঙ্গে হারমোনিয়ামের মিশ্রণে এমন এক শব্দ তৈরি হচ্ছে, যা একই সঙ্গে চেনা এবং নতুন।",
    ],
  },
  {
    slug: "jolchobi-review",
    kind: "review",
    title: "জলছবি: নদীর গানে নতুন বিন্যাস",
    excerpt: "মেঘনা রহমানের নতুন অ্যালবামে লোকসুর আর আধুনিক প্রযোজনার ভারসাম্য কতটা টেকে?",
    author: "সপ্তসুর রিভিউ প্যানেল",
    date: "৩ অক্টোবর ২০২৬",
    artistSlug: "meghna-rahman",
    score: "৮.৫/১০",
    body: [
      "ভালো লেগেছে: কণ্ঠের উষ্ণতা, আর লোকসুরের ছোট ছোট বাঁকগুলো ধরে রাখার চেষ্টা।",
      "ভালো লাগেনি: দ্বিতীয়ার্ধে কয়েকটি গানের বিন্যাস একই ধাঁচের হয়ে গেছে।",
      "সেরা ট্র্যাক: ‘নদীর ওপারে’। শেষ কথা: লোকগানের নতুন শ্রোতা তৈরির জন্য এটি একটি ভালো প্রবেশদ্বার।",
    ],
  },
  {
    slug: "signal-review",
    kind: "review",
    title: "সিগন্যাল: ঘরের স্টুডিওর বড় স্বপ্ন",
    excerpt: "তূর্য আহমেদের ইলেকট্রনিক অ্যালবাম শুনে কী মনে হলো।",
    author: "সপ্তসুর রিভিউ প্যানেল",
    date: "২০ সেপ্টেম্বর ২০২৬",
    artistSlug: "turjo-ahmed",
    score: "৭.৮/১০",
    body: [
      "ভালো লেগেছে: শব্দের স্তর সাজানোর ধৈর্য, আর হারমোনিয়ামের ব্যবহার।",
      "ভালো লাগেনি: কিছু গানে কথা শব্দের নিচে চাপা পড়ে গেছে।",
      "সেরা ট্র্যাক: ‘মেঘের পর’।",
    ],
  },
  {
    slug: "meghna-rahman-interview",
    kind: "interview",
    title: "মেঘনা রহমান: “নদী আমার প্রথম শিক্ষক”",
    excerpt: "লোকগান, শহর আর নতুন অ্যালবাম নিয়ে সপ্তসুরের সঙ্গে আলাপ।",
    author: "সপ্তসুর ডেস্ক",
    date: "১ অক্টোবর ২০২৬",
    artistSlug: "meghna-rahman",
    body: [
      "সপ্তসুর: আপনার সংগীতে সবচেয়ে বড় প্রভাব কে?",
      "মেঘনা: আমার নানির গলায় শোনা গান। তিনি কোনো দিন মঞ্চে গাননি, কিন্তু সুর ধরে রাখতেন নিখুঁতভাবে।",
      "সপ্তসুর: নতুন অ্যালবামে লোকসুরকে কীভাবে আধুনিক করলেন?",
      "মেঘনা: সুর বদলাইনি। শুধু তার চারপাশের শব্দ বদলেছি।",
    ],
  },
  {
    slug: "brishtipat-interview",
    kind: "interview",
    title: "বৃষ্টিপাত: মঞ্চই আমাদের স্টুডিও",
    excerpt: "সিলেটের ব্যান্ডটি জানাল লাইভ শো আর নতুন গানের গল্প।",
    author: "সপ্তসুর ডেস্ক",
    date: "১৫ সেপ্টেম্বর ২০২৬",
    artistSlug: "brishtipat",
    body: [
      "সপ্তসুর: ব্যান্ড হিসেবে শুরুটা কেমন ছিল?",
      "বৃষ্টিপাত: একটা ভাড়া করা ঘরে, ভাঙা অ্যাম্প নিয়ে। ওই ঘরেই প্রথম গানটা লিখি।",
      "সপ্তসুর: লাইভ শো আপনাদের কাছে কেন এত জরুরি?",
      "বৃষ্টিপাত: কারণ গান শেষ পর্যন্ত মানুষের সামনেই পূর্ণ হয়।",
    ],
  },
];

export const events: EventItem[] = [
  { slug: "emerging-night", title: "ইমার্জিং আর্টিস্ট নাইট", venue: "ডেমো ভেন্যু", city: "ঢাকা", date: "২৫ অক্টোবর ২০২৬", ticketUrl: "#" },
  { slug: "live-session", title: "সপ্তসুর লাইভ সেশন", venue: "ডেমো ভেন্যু", city: "সিলেট", date: "৮ নভেম্বর ২০২৬", ticketUrl: "#" },
  { slug: "folk-evening", title: "লোকগানের সন্ধ্যা", venue: "ডেমো ভেন্যু", city: "কুষ্টিয়া", date: "২২ নভেম্বর ২০২৬", ticketUrl: "#" },
];

export const episodes: Episode[] = [
  { slug: "ep-1", title: "সপ্তসুর সেশনস #১: ইন্ডি গানের অর্থনীতি", length: "৩৮ মিনিট", summary: "স্বাধীন শিল্পীরা গান থেকে আয় করেন কীভাবে?", date: "২ অক্টোবর ২০২৬" },
  { slug: "ep-2", title: "সপ্তসুর সেশনস #২: লোকগানের নতুন শ্রোতা", length: "৪২ মিনিট", summary: "তরুণ শ্রোতারা লোকগানে ফিরছেন কেন?", date: "১৮ সেপ্টেম্বর ২০২৬" },
  { slug: "ep-3", title: "সপ্তসুর সেশনস #৩: ঘরের স্টুডিও", length: "৩৫ মিনিট", summary: "কম খরচে গান রেকর্ড করার বাস্তব পরামর্শ।", date: "৪ সেপ্টেম্বর ২০২৬" },
];

export const regions: Region[] = [
  { name: "ঢাকা", tradition: "ব্যান্ড ও নগর-সংগীত", note: "ব্যান্ড, স্টুডিও আর লাইভ ভেন্যুর কেন্দ্র।" },
  { name: "চট্টগ্রাম", tradition: "বন্দরশহরের গান", note: "ইন্ডি আর ইলেকট্রনিক দৃশ্য বাড়ছে।" },
  { name: "সিলেট", tradition: "ধামাইল ও মরমি গান", note: "হাওরের গান আর নতুন ব্যান্ডের মিলনস্থল।" },
  { name: "কুমিল্লা", tradition: "শচীন দেব বর্মনের শহর", note: "বাংলা সংগীতের এক বড় নামের জন্মস্থান।" },
  { name: "রাজশাহী", tradition: "গম্ভীরা", note: "উত্তরবঙ্গের লোকঐতিহ্যের অংশ।" },
  { name: "কুষ্টিয়া", tradition: "বাউল ও লালনগীতি", note: "বাউল সংগীতের অন্যতম প্রধান কেন্দ্র।" },
  { name: "ময়মনসিংহ", tradition: "গীতিকা ও পালাগান", note: "ময়মনসিংহ গীতিকার অঞ্চল।" },
  { name: "রংপুর", tradition: "ভাওয়াইয়া", note: "উত্তরের মাটির গান।" },
  { name: "বরিশাল", tradition: "নদীর গান", note: "জল আর মাঝির গানের অঞ্চল।" },
];

export const decades: Decade[] = [
  { label: "৬০", theme: "রেডিও ও চলচ্চিত্রের গান" },
  { label: "৭০", theme: "গণসংগীত ও স্বাধীনতার গান" },
  { label: "৮০", theme: "ব্যান্ড সংগীতের সূচনা" },
  { label: "৯০", theme: "ব্যান্ড আর আধুনিক গানের জোয়ার" },
  { label: "০০", theme: "ক্যাসেট থেকে ডিজিটাল" },
  { label: "১০", theme: "ইউটিউব ও স্ট্রিমিং" },
  { label: "২০", theme: "স্বাধীন শিল্পী ও ডিজিটাল-ফার্স্ট" },
];

export const swaras = [
  { sa: "সা", label: "গান", href: "/music", h: 55 },
  { sa: "রে", label: "শিল্পী", href: "/artists", h: 72 },
  { sa: "গা", label: "রিভিউ", href: "/reviews", h: 48 },
  { sa: "মা", label: "সাক্ষাৎকার", href: "/interviews", h: 88 },
  { sa: "পা", label: "গল্প", href: "/stories", h: 62 },
  { sa: "ধা", label: "আর্কাইভ", href: "/archive", h: 96 },
  { sa: "নি", label: "মানচিত্র", href: "/map", h: 78 },
];

export const getArtist = (slug: string) => artists.find((a) => a.slug === slug);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const songsByArtist = (slug: string) => songs.filter((s) => s.artistSlug === slug);
export const articlesByArtist = (slug: string) => articles.filter((a) => a.artistSlug === slug);
export const articlesByKind = (k: ArticleKind) => articles.filter((a) => a.kind === k);
export const artistName = (slug: string) => getArtist(slug)?.name ?? "";
