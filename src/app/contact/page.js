import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/forms/QuoteForm";
import { company } from "@/data/company";
import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact Aswin Fire System | Get a Fire Protection Quote, Chennai",
  description:
    "Request a quote or free site survey for fire hydrant, sprinkler, alarm or suppression systems. Call 044-2381 4027 or message us on WhatsApp.",
  alternates: { canonical: "/contact" },
};

const quickLinks = [
  { label: "Book a Free Site Survey", href: "/contact#survey", icon: "calendar" },
  { label: "Request AMC Quote", href: "/amc-maintenance", icon: "wrench" },
  { label: "Download Company Profile", href: "/resources", icon: "download" },
  { label: "Careers", href: "/careers", icon: "users" },
];

const fullAddress = `${company.address.line1}, ${company.address.line2}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your fire safety requirements"
        subtitle="Tell us about your project and our engineers will get back to you within 2 working hours. For urgent breakdowns, call us directly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section" id="survey">
        <div className={`container ${styles.layout}`}>
          <div className={styles.formCard}>
            <QuoteForm />
          </div>

          <div className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>{company.legalName}</h3>
              <div className={styles.infoRow}>
                <Icon name="map-pin" size={18} />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </span>
              </div>
              <div className={styles.infoRow}>
                <Icon name="phone" size={18} />
                <span>
                  Office: {company.phone.office}
                  <br />
                  Mobile: {company.phone.mobile}
                </span>
              </div>
              <div className={styles.infoRow}>
                <Icon name="users" size={18} />
                <span>
                  {company.md.name}, {company.md.title}
                  <br />
                  {company.md.phone}
                </span>
              </div>
              <div className={styles.infoRow}>
                <Icon name="mail" size={18} />
                <span>{company.email}</span>
              </div>
              <div className={styles.infoRow}>
                <Icon name="clock" size={18} />
                <span>{company.workingHours}</span>
              </div>
              <div className={styles.infoRow}>
                <Icon name="message-circle" size={18} />
                <a
                  href={`https://wa.me/${company.phone.mobile.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700 }}
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                title={company.mapEmbedTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className={styles.coverageCard}>
            <SectionHeading eyebrow="Service coverage" title="Where we work" />
            <p style={{ color: "var(--ink-700)", marginTop: "1rem", lineHeight: 1.7 }}>
              Chennai and all of {company.regions.core.join(", ")}, with projects
              delivered in {company.regions.extended.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.quickLinks}>
            {quickLinks.map((l) => (
              <a href={l.href} className={styles.quickLink} key={l.label}>
                <Icon name={l.icon} size={18} />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
