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
        <div className={styles.list}>
          {steps.map((step, i) => (
            <div className={styles.step} key={step.title}>
              <Reveal as="span" className={styles.marker} delay={i * 60}>
                {i + 1}
              </Reveal>
              <Reveal delay={i * 60 + 60} className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.badge}>Step {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardText}>{step.text}</p>
              </Reveal>
              <span className={styles.spacer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
