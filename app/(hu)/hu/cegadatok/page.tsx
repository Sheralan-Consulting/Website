import CompanyDetailsPage from "../../../company-details-page";
import {
  EN_PATHS,
  HU_PATHS,
  localizedMetadata,
} from "../../../site-metadata";

export const metadata = localizedMetadata({
  title: "Cégadatok | Sheralan Consulting",
  description:
    "A Sheralan Consulting weboldalt üzemeltető gazdasági társaság jogi és kapcsolattartási adatai.",
  locale: "hu",
  englishPath: EN_PATHS.company,
  hungarianPath: HU_PATHS.company,
});

export default function HungarianCompanyDetailsPage() {
  return <CompanyDetailsPage language="hu" />;
}
