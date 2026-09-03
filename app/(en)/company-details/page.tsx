import CompanyDetailsPage from "../../company-details-page";
import {
  EN_PATHS,
  HU_PATHS,
  localizedMetadata,
} from "../../site-metadata";

export const metadata = localizedMetadata({
  title: "Company Details | Sheralan Consulting",
  description:
    "Legal and contact details for the company operating the Sheralan Consulting website.",
  locale: "en",
  englishPath: EN_PATHS.company,
  hungarianPath: HU_PATHS.company,
});

export default function EnglishCompanyDetailsPage() {
  return <CompanyDetailsPage language="en" />;
}
