import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/ui/IndustryCard";
import Button from "@/components/ui/Button";
import { industries } from "@/data/industries";
import styles from "./IndustriesGrid.module.css";

export default function IndustriesGrid() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Industries we protect"
            title="Fire protection built around your industry"
            light
          />
          <Button href="/industries" variant="onDark" showIcon={false}>
            See all industries
          </Button>
        </div>
        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <IndustryCard industry={ind} href="/industries" delay={i * 60} key={ind.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
