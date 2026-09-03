import HomePage from "../../home-page";
import StructuredData from "../../structured-data";
import {
  EN_PATHS,
  HU_PATHS,
  localizedMetadata,
} from "../../site-metadata";

export const metadata = localizedMetadata({
  title:
    "Sheralan Consulting | Információbiztonság, AI-irányítás és SAP-kontrollok",
  description:
    "Független szakértői tanácsadás információbiztonság, AI- és adatirányítás, SAP-biztonság és IT-assurance területén szabályozott európai szervezeteknek.",
  locale: "hu",
  englishPath: EN_PATHS.home,
  hungarianPath: HU_PATHS.home,
});

export default function HungarianHome() {
  return (
    <>
      <StructuredData />
      <HomePage language="hu" />
    </>
  );
}
