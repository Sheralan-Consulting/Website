"use client";

import { type MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  ClipboardCheck,
  Languages,
  Menu,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";
import { copy } from "./content";
import BrandLogo from "./brand-logo";
import { sitePath } from "@/lib/site-path";

type Language = "en" | "hu";
type ServiceId = keyof typeof serviceIcons;

type HomePageProps = {
  language: Language;
};

const serviceIcons = {
  security: ShieldCheck,
  ai: BrainCircuit,
  sap: Network,
  audit: ClipboardCheck,
};

export default function HomePage({ language }: HomePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<ServiceId | null>(null);
  const c = copy[language];
  const homeHref = sitePath(language === "en" ? "/" : "/hu/");
  const languageHref = sitePath(language === "en" ? "/hu/" : "/");
  const privacyHref = sitePath(
    language === "en" ? "/privacy/" : "/hu/adatvedelem/",
  );
  const companyHref = sitePath(
    language === "en" ? "/company-details/" : "/hu/cegadatok/",
  );
  const contactHref = `mailto:demeter.nagy@czdconsulting.com?subject=${encodeURIComponent(c.contact.subject)}`;

  const toggleService = (serviceId: ServiceId) => {
    setExpandedService((current) =>
      current === serviceId ? null : serviceId,
    );
  };

  const navigateToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    event.preventDefault();
    event.currentTarget.blur();
    setMenuOpen(false);

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    const headerHeight =
      document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo(0, Math.max(0, targetTop - headerHeight));
  };

  return (
    <main id="top">
      <header className="site-header">
        <Link
          className="brand"
          href={homeHref}
          aria-label={c.brandHome}
        >
          <BrandLogo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a
            href="#expertise"
            onClick={(event) => navigateToSection(event, "expertise")}
          >
            {c.nav.expertise}
          </a>
          <a
            href="#experience"
            onClick={(event) => navigateToSection(event, "experience")}
          >
            {c.nav.experience}
          </a>
        </nav>

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
          <a
            className="header-contact"
            href="#contact"
            onClick={(event) => navigateToSection(event, "contact")}
          >
            {c.nav.contact}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={c.menu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a
              href="#expertise"
              onClick={(event) => navigateToSection(event, "expertise")}
            >
              {c.nav.expertise}
            </a>
            <a
              href="#experience"
              onClick={(event) => navigateToSection(event, "experience")}
            >
              {c.nav.experience}
            </a>
            <a
              href="#contact"
              onClick={(event) => navigateToSection(event, "contact")}
            >
              {c.nav.contact}
            </a>
          </nav>
        )}
      </header>

      <section className="hero page-shell" aria-labelledby="hero-title">
        <p className="eyebrow">{c.hero.eyebrow}</p>
        <h1 id="hero-title">{c.hero.title}</h1>
        <p className="hero-body">{c.hero.body}</p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={contactHref}
          >
            {c.hero.primary}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href="#expertise"
            onClick={(event) => navigateToSection(event, "expertise")}
          >
            {c.hero.secondary}
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="expertise-section page-shell" id="expertise">
        <div className="section-heading">
          <p className="kicker">{c.expertise.kicker}</p>
          <div>
            <h2>{c.expertise.title}</h2>
            <p>{c.expertise.intro}</p>
          </div>
        </div>

        <div className="service-list">
          {c.expertise.services.map((service) => {
            const Icon = serviceIcons[service.id];
            const isExpanded = expandedService === service.id;

            return (
              <article
                className="service"
                data-expanded={isExpanded}
                key={service.id}
              >
                <button
                  className="service-hitarea"
                  type="button"
                  aria-label={`${isExpanded ? c.expertise.collapse : c.expertise.expand}: ${service.title}`}
                  aria-controls={`service-detail-${service.id}`}
                  aria-expanded={isExpanded}
                  onClick={() => toggleService(service.id)}
                />
                <div className="service-index" aria-hidden="true">
                  <Icon size={27} strokeWidth={1.45} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <div className="service-body">
                  <div
                    className="service-face service-overview"
                    data-visible={!isExpanded}
                    aria-hidden={isExpanded}
                  >
                    <p className="service-summary">{service.summary}</p>
                    <ul className="service-capabilities">
                      {service.capabilities.map((capability) => (
                        <li key={capability}>
                          <Check size={15} strokeWidth={2} aria-hidden="true" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="service-face service-detail"
                    id={`service-detail-${service.id}`}
                    data-visible={isExpanded}
                    aria-hidden={!isExpanded}
                  >
                    <p className="service-detail-kicker">{c.expertise.detailKicker}</p>
                    <p className="service-detail-copy">{service.detail}</p>
                    <p className="service-examples-title">{c.expertise.examplesTitle}</p>
                    <ul className="service-examples">
                      {service.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="service-details-toggle"
                  aria-hidden="true"
                >
                  <span>
                    {isExpanded ? c.expertise.collapse : c.expertise.expand}
                  </span>
                  <ChevronDown size={17} strokeWidth={2} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="page-shell experience-heading">
          <p className="kicker">{c.experience.kicker}</p>
          <div>
            <h2>{c.experience.title}</h2>
            <p>{c.experience.body}</p>
          </div>
        </div>

        <div className="page-shell outcome-list">
          {c.experience.outcomes.map((outcome) => (
            <article className="outcome" key={outcome.title}>
              <p className="outcome-context">{outcome.context}</p>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
            </article>
          ))}
        </div>

        <p className="page-shell organisations-label">
          {c.experience.organisationsLabel}
        </p>

        <div
          className="organisation-marquee"
          role="region"
          aria-label={c.experience.ariaLabel}
        >
          <div className="organisation-track">
            {[0, 1].map((group) => (
              <div
                className="organisation-set"
                aria-hidden={group === 1}
                key={group}
              >
                {c.experience.organisations.map((organisation) => (
                  <span
                    className="organisation-logo"
                    key={organisation.name}
                  >
                    <Image
                      src={organisation.logo}
                      alt={group === 0 ? organisation.name : ""}
                      width={190}
                      height={60}
                      unoptimized
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section page-shell">
        <p className="kicker">{c.about.kicker}</p>
        <div>
          <h2>{c.about.title}</h2>
          <p>{c.about.body}</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-shell contact-grid">
          <div>
            <p className="kicker kicker-light">{c.contact.kicker}</p>
            <h2>{c.contact.title}</h2>
          </div>
          <div className="contact-action">
            <p>{c.contact.body}</p>
            <a href={contactHref}>
              <span>{c.contact.action}</span>
              <ArrowUpRight size={28} aria-hidden="true" />
            </a>
            <small>{c.contact.availability}</small>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <p>{c.footer.legal}</p>
          <nav className="footer-links" aria-label={c.footer.legalNavigation}>
            <Link href={privacyHref}>{c.footer.notice}</Link>
            <Link href={companyHref}>{c.footer.company}</Link>
            <span>{c.footer.privacy}</span>
          </nav>
          <a href="#top" onClick={(event) => navigateToSection(event, "top")}>
            {c.footer.top} ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
