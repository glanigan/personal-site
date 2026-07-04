import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CursorGlow from "~/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gary Lanigan — Engineering Manager",
  description:
    "Engineering Manager at Checkatrade. Technical EM obsessed with consumer UX, shipping with AI, and building things that matter.",
  openGraph: {
    title: "Gary Lanigan — Engineering Manager",
    description:
      "Engineering Manager at Checkatrade. Technical EM obsessed with consumer UX, shipping with AI, and building things that matter.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Gary Lanigan — Engineering Manager",
    description:
      "Engineering Manager at Checkatrade. Technical EM obsessed with consumer UX, shipping with AI, and building things that matter.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
