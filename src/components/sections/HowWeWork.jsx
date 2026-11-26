import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import styles from "./HowWeWork.module.css";

const steps = [
  {
    title: "Site survey & risk assessment",
    text: "We study the occupancy, hazards and applicable codes.",
  },
  {
    title: "Design & drawings",
    text: "Hydraulic calculations, layouts and BOQ prepared to standard.",
  },
  {
    title: "Approvals",
    text: "Documentation support for fire NOC and consultant review.",
  },
  {
    title: "Supply & installation",
    text: "Certified products installed by our own supervised teams.",
  },
  {
    title: "Testing & commissioning",
    text: "Full performance tests witnessed with the client.",
  },
  {
    title: "Training & handover",
    text: "Operator training, manuals and as-built drawings.",
  },
  {
    title: "AMC & support",
    text: "Scheduled maintenance and breakdown response.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section section--warm">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="From site survey to lifetime support"
          align="center"
        />
        <div className={styles.scroller}>
          {steps.map((step, i) => (
            <Reveal as="div" delay={i * 70} className={styles.step} key={step.title}>
              <span className={styles.marker}>{i + 1}</span>
              <span className={styles.badge}>Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
            </Reveal>
          ))}
        </div>
        <p className={styles.hint}>← Scroll to see the full process →</p>
      </div>
    </section>
  );
}
