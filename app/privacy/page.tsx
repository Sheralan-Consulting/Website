import type { Metadata } from "next";
import PrivacyNotice from "./privacy-notice";

export const metadata: Metadata = {
  title: "Privacy Notice | CZD Consulting",
  description:
    "How CZD Consulting processes personal data received through email correspondence.",
};

export default function PrivacyPage() {
  return <PrivacyNotice />;
}
