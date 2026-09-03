import { ArrowLeft, Languages } from "lucide-react";
import Link from "next/link";
import BrandLogo from "./brand-logo";
import { sitePath } from "@/lib/site-path";

type Language = "en" | "hu";

type PrivacyNoticeProps = {
  language: Language;
};

const privacyCopy = {
  en: {
    language: "Switch to Hungarian",
    back: "Back to website",
    kicker: "Privacy",
    title: "Privacy notice",
    lead: "This notice applies when you contact Sheralan Consulting by email. We collect no personal data directly through this website.",
    updated: "Effective 2 September 2026",
    legal: "Sheralan Consulting · Czabafy Consulting Kft. · Gárdony, Hungary",
    sections: [
      {
        title: "Controller",
        paragraphs: [
          "Czabafy Consulting Tanácsadó és Szolgáltató Korlátolt Felelősségű Társaság (short name: Czabafy Consulting Kft.) is the controller for personal data contained in email correspondence.",
          "Registered office: 2483 Gárdony, Névtelen utca 15/2., Hungary",
          "Company registration number: 07-09-035250",
          "Tax number: 32424126-2-07",
        ],
        link: {
          href: "mailto:demeter.nagy@czdconsulting.com",
          label: "demeter.nagy@czdconsulting.com",
        },
      },
      {
        title: "What we process",
        paragraphs: [
          "When you email us, we process the information you choose to provide: normally your name, email address, organisation and role, the message, attachments and subsequent correspondence. Providing this information is voluntary, but we cannot reply without sufficient contact information.",
          "Please do not send sensitive personal data unless it is necessary for your enquiry.",
        ],
        link: null,
      },
      {
        title: "Why we process it",
        paragraphs: [
          "We use correspondence only to answer and manage your enquiry, consider a possible engagement and, where relevant, meet legal obligations. The legal bases are our legitimate interest in handling professional enquiries (GDPR Article 6(1)(f)), steps requested before entering into a contract (Article 6(1)(b)), and a legal obligation where applicable (Article 6(1)(c)). We do not use contact data for unrelated marketing, sell it or make automated decisions about you.",
        ],
        link: {
          href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng",
          label: "General Data Protection Regulation",
        },
      },
      {
        title: "Who receives it",
        paragraphs: [
          "Access is limited to Sheralan Consulting personnel or specialists who need the information to handle the enquiry, and email or IT providers acting on our behalf. We may disclose data where required by law. If a service provider processes data outside the EEA, the applicable GDPR transfer safeguards are used.",
        ],
        link: null,
      },
      {
        title: "How long we keep it",
        paragraphs: [
          "If the enquiry does not lead to an engagement, we delete routine correspondence no later than 12 months after the last substantive contact. If it relates to an engagement, a legal obligation or a possible legal claim, we keep only what is necessary for the applicable statutory period.",
        ],
        link: null,
      },
      {
        title: "Your rights",
        paragraphs: [
          "Subject to the conditions and limitations of the GDPR, you have the following rights:",
        ],
        items: [
          "Access: request confirmation of whether we process your personal data, information about that processing and a copy of the data.",
          "Rectification: ask us to correct inaccurate data or complete incomplete data.",
          "Erasure: ask us to delete data where there is no overriding legal reason to retain it.",
          "Restriction: ask us to limit processing in the circumstances set out in the GDPR.",
          "Objection: object at any time to processing based on legitimate interests. We will stop unless we demonstrate compelling legitimate grounds or need the data for legal claims.",
          "Portability: where processing is automated and based on contract, receive data you provided in a structured, commonly used, machine-readable format and request its transfer where technically feasible.",
          "Complaint and judicial remedy: complain to the Hungarian National Authority for Data Protection and Freedom of Information (NAIH) and seek a judicial remedy if you believe your rights have been infringed.",
        ],
        afterItems:
          "Requests are generally free of charge and answered without undue delay, normally within one month. If the GDPR permits an extension, we will explain why and notify you within the first month. We may ask for information needed to verify your identity. Send requests to our email address.",
        link: {
          href: "https://naih.hu/adatkezeles-erintettjekent-fordulok-a-hatosaghoz/adatvedelmi-hatosagi-eljaras-gdpr",
          label: "NAIH complaint information",
        },
      },
      {
        title: "Website data",
        paragraphs: [
          "The website has no contact form, analytics, advertising trackers or non-essential cookies. Sheralan Consulting does not use visitor data for analytics or marketing. The hosting provider may temporarily process limited technical connection data, such as an IP address and request details, to deliver and secure the site. Sheralan Consulting does not use that information to identify or profile visitors.",
        ],
        link: null,
      },
    ],
  },
  hu: {
    language: "Váltás angol nyelvre",
    back: "Vissza a weboldalra",
    kicker: "Adatvédelem",
    title: "Adatkezelési tájékoztató",
    lead: "Ez a tájékoztató arra az esetre vonatkozik, ha e-mailben kapcsolatba lép a Sheralan Consultinggal. A weboldalon keresztül közvetlenül nem gyűjtünk személyes adatot.",
    updated: "Hatályos: 2026. szeptember 2.",
    legal: "Sheralan Consulting · Czabafy Consulting Kft. · Gárdony, Magyarország",
    sections: [
      {
        title: "Adatkezelő",
        paragraphs: [
          "A Czabafy Consulting Tanácsadó és Szolgáltató Korlátolt Felelősségű Társaság (rövidített név: Czabafy Consulting Kft.) az e-mailes kapcsolattartás során kezelt személyes adatok adatkezelője.",
          "Székhely: 2483 Gárdony, Névtelen utca 15/2.",
          "Cégjegyzékszám: 07-09-035250",
          "Adószám: 32424126-2-07",
        ],
        link: {
          href: "mailto:demeter.nagy@czdconsulting.com",
          label: "demeter.nagy@czdconsulting.com",
        },
      },
      {
        title: "A kezelt adatok",
        paragraphs: [
          "Ha e-mailt ír nekünk, az Ön által megadott adatokat kezeljük: jellemzően a nevét, e-mail-címét, szervezetét és beosztását, az üzenet és a csatolmányok tartalmát, valamint a kapcsolódó levelezést. Az adatok megadása önkéntes, de megfelelő kapcsolattartási adat nélkül nem tudunk válaszolni.",
          "Kérjük, különleges személyes adatot csak akkor küldjön, ha az a megkereséshez feltétlenül szükséges.",
        ],
        link: null,
      },
      {
        title: "Az adatkezelés célja és jogalapja",
        paragraphs: [
          "Az adatokat kizárólag a megkeresés megválaszolására és kezelésére, egy lehetséges megbízás mérlegelésére, valamint szükség esetén jogi kötelezettség teljesítésére használjuk. A jogalap a szakmai megkeresések kezeléséhez fűződő jogos érdekünk (GDPR 6. cikk (1) bekezdés f) pont), az Ön kérésére történő szerződéskötést megelőző lépések (b) pont), illetve szükség esetén jogi kötelezettség teljesítése (c) pont). Az adatokat nem használjuk fel ettől eltérő marketingre, nem értékesítjük és nem végzünk automatizált döntéshozatalt.",
        ],
        link: {
          href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/hun",
          label: "Általános adatvédelmi rendelet (GDPR)",
        },
      },
      {
        title: "Az adatok címzettjei",
        paragraphs: [
          "Az adatokhoz kizárólag a Sheralan Consulting megkeresés kezelésében részt vevő munkatársai vagy szakértői, továbbá a nevünkben eljáró e-mail- és IT-szolgáltatók férhetnek hozzá. Jogszabályi kötelezettség esetén az adatokat az illetékes szervnek átadhatjuk. Ha valamely szolgáltató az EGT-n kívül kezel adatot, az adattovábbításra a GDPR szerinti megfelelő garanciákat alkalmazzuk.",
        ],
        link: null,
      },
      {
        title: "Megőrzési idő",
        paragraphs: [
          "Ha a megkeresésből nem lesz megbízás, a szokásos levelezést legkésőbb az utolsó érdemi kapcsolatfelvételtől számított 12 hónap után töröljük. Megbízáshoz, jogi kötelezettséghez vagy lehetséges jogi igényhez kapcsolódó adatot csak a vonatkozó jogszabályi időtartamig őrzünk meg.",
        ],
        link: null,
      },
      {
        title: "Az Ön jogai",
        paragraphs: [
          "A GDPR-ban meghatározott feltételek és korlátok mellett Önt az alábbi jogok illetik meg:",
        ],
        items: [
          "Hozzáférés: visszajelzést kérhet arról, hogy kezeljük-e személyes adatait, tájékoztatást kaphat az adatkezelésről, és másolatot kérhet az adatokról.",
          "Helyesbítés: kérheti a pontatlan adatok javítását és a hiányos adatok kiegészítését.",
          "Törlés: kérheti adatai törlését, ha azok megőrzésére nincs elsőbbséget élvező jogi indok.",
          "Korlátozás: a GDPR-ban meghatározott esetekben kérheti az adatkezelés korlátozását.",
          "Tiltakozás: bármikor tiltakozhat a jogos érdeken alapuló adatkezelés ellen. Ilyenkor az adatkezelést megszüntetjük, kivéve, ha elsőbbséget élvező kényszerítő jogos okot igazolunk, vagy az adat jogi igény érvényesítéséhez szükséges.",
          "Adathordozhatóság: szerződésen alapuló, automatizált adatkezelés esetén az Ön által megadott adatokat tagolt, széles körben használt, géppel olvasható formátumban kérheti, és technikai lehetőség esetén kérheti azok közvetlen továbbítását.",
          "Panasz és bírósági jogorvoslat: jogsérelem esetén panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH), és bírósághoz fordulhat.",
        ],
        afterItems:
          "Az érintetti kérelmek teljesítése főszabály szerint díjmentes; indokolatlan késedelem nélkül, rendszerint egy hónapon belül válaszolunk. Ha a GDPR alapján a határidő meghosszabbítható, ennek okáról az első hónapon belül tájékoztatjuk. Szükség esetén kérhetjük személyazonosságának igazolását. Kérelmét az e-mail-címünkre küldheti.",
        link: {
          href: "https://naih.hu/adatkezeles-erintettjekent-fordulok-a-hatosaghoz/adatvedelmi-hatosagi-eljaras-gdpr",
          label: "Tájékoztató a NAIH eljárásáról",
        },
      },
      {
        title: "A weboldal adatkezelése",
        paragraphs: [
          "A weboldalon nincs kapcsolatfelvételi űrlap, analitika, reklámcélú követőkód vagy nem szükséges süti. A Sheralan Consulting a látogatói adatokat nem használja analitikára vagy marketingre. A tárhelyszolgáltató a weboldal továbbítása és védelme érdekében ideiglenesen korlátozott technikai kapcsolatadatokat – például IP-címet és kérésadatokat – kezelhet. A Sheralan Consulting ezeket nem használja a látogatók azonosítására vagy profilozására.",
        ],
        link: null,
      },
    ],
  },
} as const;

export default function PrivacyNotice({ language }: PrivacyNoticeProps) {
  const c = privacyCopy[language];
  const homeHref = sitePath(language === "en" ? "/" : "/hu/");
  const languageHref = sitePath(
    language === "en" ? "/hu/adatvedelem/" : "/privacy/",
  );
  const companyHref = sitePath(
    language === "en" ? "/company-details/" : "/hu/cegadatok/",
  );

  return (
    <main className="privacy-page">
      <header className="site-header privacy-header">
        <Link className="brand" href={homeHref} aria-label={language === "en" ? "Sheralan Consulting home" : "Sheralan Consulting kezdőlap"}>
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
            <p className="privacy-updated">{c.updated}</p>
          </div>
        </header>

        <div>
          {c.sections.map((section) => (
            <section className="privacy-section" key={section.title}>
              <h2>{section.title}</h2>
              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {"items" in section && section.items && (
                  <ul className="privacy-rights-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {"afterItems" in section && section.afterItems && (
                  <p className="privacy-rights-note">{section.afterItems}</p>
                )}
                {section.link && (
                  <a
                    href={section.link.href}
                    target={section.link.href.startsWith("http") ? "_blank" : undefined}
                    rel={section.link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {section.link.label}
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      <footer className="site-footer">
        <div className="page-shell footer-grid privacy-footer-grid">
          <p>{c.legal}</p>
          <nav className="footer-links" aria-label={language === "en" ? "Legal information" : "Jogi információk"}>
            <Link href={companyHref}>
              {language === "en" ? "Company details" : "Cégadatok"}
            </Link>
            <Link href={homeHref}>{c.back} ↑</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
