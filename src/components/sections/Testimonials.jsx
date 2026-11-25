import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { testimonials } from "@/data/clients";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="section section--warm">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
        <div className={styles.grid} style={{ marginTop: "2.5rem" }}>
          {testimonials.map((t, i) => (
            <Reveal as="figure" delay={i * 100} className={styles.card} key={t.name}>
              <Icon name="quote" size={28} className={styles.quoteIcon} />
              <blockquote className={styles.text}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
