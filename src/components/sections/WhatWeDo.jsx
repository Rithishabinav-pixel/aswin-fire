import SectionHeading from "@/components/ui/SectionHeading";
import SolutionCard from "@/components/ui/SolutionCard";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/solutions";
import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <section className="section section--warm">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="What we do"
            title="Complete fire and life-safety solutions under one roof"
            description="We design every system to NFPA, FM, UL and National Building Code of India standards, using equipment from trusted international manufacturers."
          />
          <Button href="/solutions" variant="secondary">
            All solutions
          </Button>
        </div>
        <div className={styles.grid}>
          {solutions.map((s, i) => (
            <SolutionCard solution={s} index={i} delay={i * 70} key={s.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
