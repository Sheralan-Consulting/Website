import type { Metadata } from "next";
import { sitePath } from "@/lib/site-path";
import { SITE_NAME } from "../site-metadata";
import "../globals.css";

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
