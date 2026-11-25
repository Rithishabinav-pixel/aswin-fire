import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import styles from "./Amc.module.css";

export const metadata = {
  title: "Fire Fighting AMC & Maintenance Services in Chennai | Aswin Fire",
  description:
    "Annual maintenance contracts for fire hydrant, sprinkler, fire alarm and suppression systems. Inspection, testing, refilling, training and breakdown support.",
  alternates: { canonical: "/amc-maintenance" },
};

const coverage = [
  "Scheduled preventive maintenance visits",
  "Fire pump performance testing and diesel engine checks",
  "Hydrant, hose and valve inspection",
  "Sprinkler and alarm valve testing",
  "Fire alarm device testing and panel health checks",
  "Gas suppression cylinder weighing and pressure checks",
  "Extinguisher inspection, refilling and hydro-testing",
  "Service reports and records for audits and fire NOC renewal",
  "Breakdown response within a committed time in your service area",
];

const plans = [
  {
    name: "Essential",
    for: "Small buildings, single system",
    includes: ["Quarterly visits", "Inspection reports", "Phone support"],
  },
  {
    name: "Comprehensive",
    for: "Multi-system buildings",
    includes: ["Monthly visits", "All systems covered", "Priority breakdown support"],
    featured: true,
  },
  {
    name: "Critical Care",
    for: "Hospitals, data centres, plants",
    includes: ["Dedicated engineer", "24×7 response", "Spares support"],
  },
];

const otherServices = [
  {
    title: "Fire safety audits",
    text: "Compliance review against NBC and local rules, with a prioritised action list.",
  },
  {
    title: "System upgrades & retrofits",
    text: "Modernising old panels, pumps and pipework.",
  },
  {
    title: "Operator & fire-warden training",
    text: "Hands-on training for your staff, including free product demonstrations.",
  },
  {
    title: "Fire NOC documentation support",
    text: "Drawings and records for approvals and renewals.",
  },
];

export default function AmcPage() {
  return (
    <>
      <PageHero
        eyebrow="AMC & Maintenance"
        title="Fire system AMC & maintenance"
        subtitle="A fire system that has not been maintained is a system you cannot trust. Our annual maintenance contracts keep your hydrants, sprinklers, alarms and suppression systems ready to perform, inspection-ready and compliant."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AMC & Maintenance" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What our AMC covers" title="A complete maintenance cycle" />
          <div className={styles.checklist}>
            {coverage.map((item) => (
              <div className={styles.checkItem} key={item}>
                <Icon name="check-circle" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="AMC plans" title="Choose the level of cover your facility needs" />
          <div className={styles.plans}>
            {plans.map((plan) => (
              <Reveal
                key={plan.name}
                className={`${styles.plan} ${plan.featured ? styles.planFeatured : ""}`}
              >
                {plan.featured ? <span className={styles.planBadge}>Most popular</span> : null}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planFor}>{plan.for}</p>
                <div className={styles.planIncludes}>
                  {plan.includes.map((item) => (
                    <div className={styles.planIncludeItem} key={item}>
                      <Icon name="check" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  showIcon={false}
                  full
                >
                  Request AMC Quote
                </Button>
              </Reveal>
            ))}
          </div>
          <p className={styles.confirmNote}>
            Plan names, visit frequency and response times are confirmed with your
            engineer based on your site and systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Other services" title="Beyond scheduled maintenance" />
          <div className={styles.otherGrid}>
            {otherServices.map((s) => (
              <div className={styles.otherCard} key={s.title}>
                <h3 className={styles.otherTitle}>{s.title}</h3>
                <p className={styles.otherText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className={styles.calloutWrap}>
            <div>
              <h2 style={{ fontSize: "1.375rem", marginBottom: "0.5rem" }}>
                We maintain systems we didn&rsquo;t install
              </h2>
              <p className={styles.calloutText}>
                Took over a building with an existing system? We audit it, bring it up
                to standard and take over maintenance.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Request an Audit
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="Is your AMC due for renewal?"
            text="Get a free inspection and a clear picture of what your system needs."
            primary={{ label: "Request AMC Quote", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
