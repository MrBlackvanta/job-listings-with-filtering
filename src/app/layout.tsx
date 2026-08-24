import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const name = "Job Listings";
const title = `${name} | Find your next developer role`;
const description =
  "Browse developer job listings and filter them by role, level, language and tool to find the openings that match your stack.";
const siteUrl =
  "https://job-listings-with-filtering.abdelrhman-ahmed8881.workers.dev";
const shareCard = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Job Listings, a developer job board filtered by role, level, language and tool",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareCard],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareCard],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5ca5a5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
