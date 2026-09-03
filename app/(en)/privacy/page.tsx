import PrivacyNotice from "../../privacy-notice";
import {
  EN_PATHS,
  HU_PATHS,
  localizedMetadata,
} from "../../site-metadata";

export const metadata = localizedMetadata({
  title: "Privacy Notice | Sheralan Consulting",
  description:
    "How Sheralan Consulting and Czabafy Consulting Kft. process personal data received through email correspondence.",
  locale: "en",
  englishPath: EN_PATHS.privacy,
  hungarianPath: HU_PATHS.privacy,
});

export default function EnglishPrivacyPage() {
  return <PrivacyNotice language="en" />;
}
