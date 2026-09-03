import PrivacyNotice from "../../../privacy-notice";
import {
  EN_PATHS,
  HU_PATHS,
  localizedMetadata,
} from "../../../site-metadata";

export const metadata = localizedMetadata({
  title: "Adatkezelési tájékoztató | Sheralan Consulting",
  description:
    "A Sheralan Consulting és a Czabafy Consulting Kft. e-mailes kapcsolattartáshoz kapcsolódó adatkezelése.",
  locale: "hu",
  englishPath: EN_PATHS.privacy,
  hungarianPath: HU_PATHS.privacy,
});

export default function HungarianPrivacyPage() {
  return <PrivacyNotice language="hu" />;
}
