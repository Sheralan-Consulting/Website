import { ArrowLeft, Languages } from "lucide-react";
import Link from "next/link";
import BrandLogo from "./brand-logo";
import { CONTACT_EMAIL } from "./site-metadata";
import { sitePath } from "@/lib/site-path";

type Language = "en" | "hu";

type CompanyDetailsPageProps = {
  language: Language;
};

const details = {
  en: {
    brandHome: "Sheralan Consulting home",
    language: "Switch to Hungarian",
    back: "Back to website",
    kicker: "Company information",
    title: "The organisation behind Sheralan Consulting.",
    lead: "Sheralan Consulting is the brand displayed on this website. The website is operated by the Hungarian company below.",
    legal: "Sheralan Consulting · Czabafy Consulting Kft. · Gárdony, Hungary",
    privacy: "Privacy notice",
    rows: [
      ["Website brand", "Sheralan Consulting"],
      [
        "Full legal name",
        "Czabafy Consulting Tanácsadó és Szolgáltató Korlátolt Felelősségű Társaság",
      ],
      ["Short legal name", "Czabafy Consulting Kft."],
      ["Registered office", "2483 Gárdony, Névtelen utca 15/2., Hungary"],
      ["Company registration number", "07-09-035250"],
      ["Tax number", "32424126-2-07"],
    ],
  },
  hu: {
    brandHome: "Sheralan Consulting kezdőlap",
    language: "Váltás angol nyelvre",
    back: "Vissza a weboldalra",
    kicker: "Cégadatok",
    title: "A Sheralan Consulting mögött álló társaság.",
    lead: "A Sheralan Consulting a weboldalon megjelenő márkanév. A weboldalt az alábbi magyar gazdasági társaság üzemelteti.",
    legal: "Sheralan Consulting · Czabafy Consulting Kft. · Gárdony, Magyarország",
    privacy: "Adatkezelési tájékoztató",
    rows: [
      ["A weboldalon használt márkanév", "Sheralan Consulting"],
      [
        "Teljes cégnév",
        "Czabafy Consulting Tanácsadó és Szolgáltató Korlátolt Felelősségű Társaság",
      ],
      ["Rövidített cégnév", "Czabafy Consulting Kft."],
      ["Székhely", "2483 Gárdony, Névtelen utca 15/2."],
      ["Cégjegyzékszám", "07-09-035250"],
      ["Adószám", "32424126-2-07"],
    ],
  },
} as const;

export default function CompanyDetailsPage({
  language,
}: CompanyDetailsPageProps) {
  const c = details[language];
  const homeHref = sitePath(language === "en" ? "/" : "/hu/");
  const languageHref = sitePath(
    language === "en" ? "/hu/cegadatok/" : "/company-details/",
  );
  const privacyHref = sitePath(
    language === "en" ? "/privacy/" : "/hu/adatvedelem/",
  );

  return (
    <main className="privacy-page">
      <header className="site-header privacy-header">
        <Link className="brand" href={homeHref} aria-label={c.brandHome}>
          <BrandLogo />
        </Link>

        <div className="header-actions">
          <Link
            className="language-button"
            href={languageHref}
            hrefLang={language === "en" ? "hu" : "en"}
            aria-label={c.language}
          >
            <Languages size={16} aria-hidden="true" />
            {language === "en" ? "HU" : "EN"}
          </Link>
          <Link className="privacy-back" href={homeHref}>
            <ArrowLeft size={16} aria-hidden="true" />
            <span>{c.back}</span>
          </Link>
        </div>
      </header>

      <article className="privacy-notice page-shell">
        <header className="privacy-intro">
          <p className="kicker">{c.kicker}</p>
          <div>
            <h1>{c.title}</h1>
            <p className="privacy-lead">{c.lead}</p>
          </div>
        </header>

        <section className="privacy-section company-information">
          <h2>{language === "en" ? "Legal details" : "Jogi adatok"}</h2>
          <div>
            <dl className="company-details-list">
              {c.rows.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div>
                <dt>{language === "en" ? "Contact" : "Kapcsolat"}</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </article>

      <footer className="site-footer">
        <div className="page-shell footer-grid privacy-footer-grid">
          <p>{c.legal}</p>
          <nav
            className="footer-links"
            aria-label={language === "en" ? "Legal information" : "Jogi információk"}
          >
            <Link href={privacyHref}>{c.privacy}</Link>
            <Link href={homeHref}>{c.back} ↑</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
