import type { Metadata } from "next";

export const SITE_BASE_URL =
  "https://sheralan-consulting.github.io/Website";
export const SITE_NAME = "Sheralan Consulting";
export const CONTACT_EMAIL = "demeter.nagy@czdconsulting.com";

export const EN_PATHS = {
  home: "/",
  privacy: "/privacy/",
  company: "/company-details/",
} as const;

export const HU_PATHS = {
  home: "/hu/",
  privacy: "/hu/adatvedelem/",
  company: "/hu/cegadatok/",
} as const;

export function absoluteUrl(path: string) {
  return `${SITE_BASE_URL}${path}`;
}

type LocalizedMetadataOptions = {
  title: string;
  description: string;
  locale: "en" | "hu";
  englishPath: string;
  hungarianPath: string;
};

export function localizedMetadata({
  title,
  description,
  locale,
  englishPath,
  hungarianPath,
}: LocalizedMetadataOptions): Metadata {
  const canonical =
    locale === "en"
      ? absoluteUrl(englishPath)
      : absoluteUrl(hungarianPath);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(englishPath),
        hu: absoluteUrl(hungarianPath),
        "x-default": absoluteUrl(englishPath),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      locale: locale === "en" ? "en_GB" : "hu_HU",
      alternateLocale: locale === "en" ? ["hu_HU"] : ["en_GB"],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
