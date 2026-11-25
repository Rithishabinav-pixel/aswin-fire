import PageHero from "@/components/sections/PageHero";
import SolutionCard from "@/components/ui/SolutionCard";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { solutions } from "@/data/solutions";
import styles from "@/components/sections/WhatWeDo.module.css";

export const metadata = {
  title: "Fire Protection Solutions | Hydrant, Sprinkler, Alarm, Suppression",
  description:
    "Explore Aswin's fire protection solutions: water-based firefighting, fire alarm, gas suppression, passive fire protection and security systems, designed to NFPA and NBC.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Fire protection solutions for every hazard"
        subtitle="Five solution families, one engineering team, and complete accountability from design to maintenance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal as="p" style={{ maxWidth: "48rem", fontSize: "1.0625rem", color: "var(--ink-700)", lineHeight: 1.7, marginBottom: "3rem" }}>
            Every building and plant carries a different fire risk. A hospital ward, a
            server room, a transformer yard and a commercial kitchen each need a
            different response. We assess the hazard, select the right technology and
            engineer a system that meets code and fits the way your facility operates.
          </Reveal>
          <div className={styles.grid}>
            {solutions.map((s, i) => (
              <SolutionCard solution={s} index={i} delay={i * 70} key={s.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTABand
            title="Not sure which system you need?"
            text="Our engineers will visit your site, assess the hazards and recommend the right combination of systems, at no cost."
            primary={{ label: "Book a Free Site Survey", href: "/contact#survey" }}
          />
        </div>
      </section>
    </>
  );
}
