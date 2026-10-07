import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saptasur.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "সপ্তসুর: বাংলা গান ও সংস্কৃতির ডিজিটাল ঘর", template: "%s | সপ্তসুর" },
  description: "বাংলা গান, শিল্পী, রিভিউ, সাক্ষাৎকার আর সংগীতের ইতিহাস এক জায়গায়।",
  openGraph: { siteName: "সপ্তসুর", locale: "bn_BD", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&family=Noto+Serif+Bengali:wght@500;700;800&display=swap"
        />
      </head>
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
