import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { nunito } from "../lib/font";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Pro-Assistant",
  description:
    "ProAssistant is an AI-powered learning companion that provides personalized study support, gamified motivation, accountability, and emotional encouragement to help students stay engaged and on track with their academic goals.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "next js",
    "next15",
    "pwa",
    "next-pwa",
    "pro assistant",
    "education",
  ],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Pro Assistant" },
    {
      name: "Pro Assistant",
      url: "",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${nunito.className}`}>{children}</body>
      <Toaster />
    </html>
  );
}
