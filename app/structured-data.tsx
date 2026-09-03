import {
  absoluteUrl,
  CONTACT_EMAIL,
  EN_PATHS,
  SITE_NAME,
} from "./site-metadata";

const organisation = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: SITE_NAME,
  legalName:
    "Czabafy Consulting Tanácsadó és Szolgáltató Korlátolt Felelősségű Társaság",
  url: absoluteUrl(EN_PATHS.home),
  logo: absoluteUrl("/sheralan-ridge.svg"),
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Névtelen utca 15/2.",
    postalCode: "2483",
    addressLocality: "Gárdony",
    addressCountry: "HU",
  },
  areaServed: "Europe",
  availableLanguage: ["English", "Hungarian"],
  knowsAbout: [
    "Information security",
    "Regulatory governance",
    "AI governance",
    "Data governance",
    "Privacy governance",
    "SAP security",
    "Identity and access management",
    "SAP GRC",
    "IT audit",
    "Technology assurance",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organisation).replace(/</g, "\\u003c"),
      }}
    />
  );
}
