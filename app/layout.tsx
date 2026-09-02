import type { Metadata } from "next";
import { sitePath } from "@/lib/site-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "CZD Consulting | Security, AI Governance & SAP Controls",
  description:
    "Independent specialist consulting in information security, AI governance and SAP security, IAM and GRC for regulated European organisations.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
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
