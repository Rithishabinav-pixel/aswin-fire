import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { company } from "@/data/company";
import styles from "./About.module.css";

export const metadata = {
  title: "About Aswin Fire System | Fire Protection Engineers, Chennai",
  description:
    "Since our founding, Aswin Fire System has designed, installed and maintained fire protection systems for hospitals, industry and enterprises across South India.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "shield-check",
    title: "Safety first",
    text: "Every decision starts with the safety of people and property.",
  },
  {
    icon: "cpu",
    title: "Engineering integrity",
    text: "We design to code, never to the lowest common denominator.",
  },
  {
    icon: "users",
    title: "Accountability",
    text: "One team owns the project from survey to AMC.",
  },
  {
    icon: "zap",
    title: "Responsiveness",
    text: "When a system needs attention, we are there.",
  },
];

const stages = [
  {
    title: "Design engineering",
    text: "Site surveys, hazard analysis, hydraulic calculations, computer-aided design and BOQs.",
  },
  {
    title: "Execution",
    text: "Skilled installation teams, quality supervision, testing and commissioning to standard.",
  },
  {
    title: "After-sales service",
    text: "Operator training, preventive maintenance, breakdown analysis and AMC.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aswin Fire"
        title="Engineering fire safety you can rely on"
        subtitle="A Chennai-based fire protection system integrator, trusted by clients, consultants and authorities for more than a decade."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section">
        <div className={`container ${styles.whoGrid}`}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Who we are</p>
            <p className={styles.lead}>
              {company.legalName} ({company.formerName}) is a fire protection, safety
              and security system integrator headquartered in Chennai. For over{" "}
              {company.foundedYearsAgo} years, we have designed, supplied, installed,
              tested and commissioned fire protection systems for hospitals, IT
              campuses, hotels, factories, power plants and public infrastructure.
            </p>
            <p className={styles.lead}>
              We source our equipment from select international manufacturers and
              engineer every system to NFPA, FM, UL and National Building Code of India
              requirements. Our work spans {company.regions.core.join(", ")},{" "}
              {company.regions.extended.join(", ")}.
            </p>
            <p className={styles.lead}>
              Today we are a trusted name among facility owners, MEP consultants,
              architects and fire officials for systems that perform when it matters.
            </p>
          </Reveal>
          <Reveal delay={100} className={styles.factCard}>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>Headquarters</span>
              <span className={styles.factValue}>Chennai, Tamil Nadu</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>Formerly known as</span>
              <span className={styles.factValue}>{company.formerName}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>Projects delivered</span>
              <span className={styles.factValue}>{company.projectsCompleted}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>Clients served</span>
              <span className={styles.factValue}>{company.clientsServed}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>States active in</span>
              <span className={styles.factValue}>{company.statesServed}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className={styles.mdWrap}>
            <span className={styles.avatar}>AK</span>
            <div>
              <Icon name="quote" size={26} style={{ color: "var(--red-500)", marginBottom: "0.75rem" }} />
              <p className={styles.mdQuote}>
                &ldquo;Fire protection is not a product you buy once; it is a
                responsibility you carry for the life of a building. At Aswin, we design
                every system as if our own families worked inside it, and we stay with
                our clients long after handover.&rdquo;
              </p>
              <p className={styles.mdName}>{company.md.name}</p>
              <p className={styles.mdTitle}>{company.md.title}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <div className={styles.twoCol}>
            <Reveal className={styles.visionCard}>
              <p className={styles.visionLabel}>Our vision</p>
              <p className={styles.visionText}>
                To be South India&rsquo;s most trusted fire protection engineering
                partner for critical facilities.
              </p>
            </Reveal>
            <Reveal delay={80} className={styles.visionCard}>
              <p className={styles.visionLabel}>Our mission</p>
              <p className={styles.visionText}>
                To offer the right products, professional installation, rigorous
                testing and responsive service, so that every system we deliver
                performs at peak efficiency and every client is fully protected.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className={styles.valuesGrid} style={{ marginTop: "2.5rem" }}>
            {values.map((v, i) => (
              <Reveal delay={i * 70} className={styles.valueCard} key={v.title}>
                <span className={styles.valueIcon}>
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title="What sets our engineering apart"
          />
          <div className={styles.stageGrid} style={{ marginTop: "2.5rem" }}>
            {stages.map((s, i) => (
              <Reveal delay={i * 80} className={styles.stageCard} key={s.title}>
                <p className={styles.stageIndex}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={styles.stageTitle}>{s.title}</h3>
                <p className={styles.stageText}>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.peopleWrap}`}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our people</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.125rem)", marginBottom: "1rem" }}>
              Engineers, supervisors and technicians who take safety seriously
            </h2>
            <p className={styles.lead} style={{ marginBottom: "1.5rem" }}>
              Our design engineers, site supervisors and service technicians work as
              one accountable team across every project, from the first site survey to
              years of ongoing AMC support. We are always looking for people who share
              that standard.
            </p>
            <a href="/careers" className="eyebrow" style={{ color: "var(--ink-800)" }}>
              Join our team →
            </a>
          </Reveal>
          <Reveal delay={100} className={styles.peopleGrid}>
            <div className={styles.peopleTile}>
              <p className={styles.peopleTileValue}>Design</p>
              <p className={styles.peopleTileLabel}>Hydraulics &amp; CAD engineers</p>
            </div>
            <div className={styles.peopleTile}>
              <p className={styles.peopleTileValue}>Site</p>
              <p className={styles.peopleTileLabel}>Supervisors &amp; installers</p>
            </div>
            <div className={styles.peopleTile}>
              <p className={styles.peopleTileValue}>Testing</p>
              <p className={styles.peopleTileLabel}>Commissioning engineers</p>
            </div>
            <div className={styles.peopleTile}>
              <p className={styles.peopleTileValue}>Service</p>
              <p className={styles.peopleTileLabel}>AMC &amp; breakdown technicians</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight section--warm">
        <div className="container">
          <SectionHeading eyebrow="Certifications" title="Certifications & registrations" />
          <div className={styles.badgeGrid} style={{ marginTop: "2.5rem" }}>
            {company.certifications.map((c, i) => (
              <Reveal delay={i * 70} className={styles.badgeCard} key={c.label}>
                <span className={styles.badgeIcon}>
                  <Icon name="award" size={20} />
                </span>
                <p className={styles.badgeLabel}>{c.label}</p>
                <p className={styles.badgeNote}>{c.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Technology partners" title="Authorised to supply and install" />
          <div style={{ marginTop: "2.5rem" }}>
            <LogoMarquee items={company.brands} />
          </div>
        </div>
      </section>

      <section className="section section--tight section--warm">
        <div className="container">
          <SectionHeading eyebrow="Standards" title="Standards we follow" />
          <div className={styles.chipRow} style={{ marginTop: "2rem" }}>
            {company.standards.map((s) => (
              <span className={styles.chip} key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="Want to know more about Aswin?"
            text="Download our company profile or talk directly with our engineering team."
            primary={{ label: "Talk to Our Team", href: "/contact" }}
            secondary={{ label: "Download Company Profile", href: "/resources" }}
          />
        </div>
      </section>
    </>
  );
}
