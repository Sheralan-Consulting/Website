import HomePage from "../home-page";
import StructuredData from "../structured-data";
import {
  EN_PATHS,
  HU_PATHS,
  localizedMetadata,
} from "../site-metadata";

export const metadata = localizedMetadata({
  title: "Sheralan Consulting | Security, AI Governance & SAP Controls",
  description:
    "Independent specialist consulting in information security, AI and data governance, SAP security and IT assurance for regulated European organisations.",
  locale: "en",
  englishPath: EN_PATHS.home,
  hungarianPath: HU_PATHS.home,
});

export default function EnglishHome() {
  return (
    <>
      <StructuredData />
      <HomePage language="en" />
    </>
  );
}
