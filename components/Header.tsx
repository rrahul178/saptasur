import Link from "next/link";

const links = [
  { href: "/music", label: "গান" },
  { href: "/artists", label: "শিল্পী" },
  { href: "/reviews", label: "রিভিউ" },
  { href: "/interviews", label: "সাক্ষাৎকার" },
  { href: "/stories", label: "গল্প" },
  { href: "/archive", label: "আর্কাইভ" },
  { href: "/search", label: "খুঁজুন" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-2xl font-extrabold">
          সপ্তসুর
        </Link>
        <nav className="hidden gap-6 md:flex" aria-label="প্রধান মেনু">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded border border-line px-3 py-1">মেনু</summary>
          <div className="absolute right-0 mt-2 flex w-44 flex-col rounded border border-line bg-surface p-2 shadow-lg">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-2 hover:text-accent">
                {l.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
