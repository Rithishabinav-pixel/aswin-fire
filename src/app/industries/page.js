import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { industries } from "@/data/industries";
import { getProjectsByIndustry } from "@/data/projects";
import styles from "./Industries.module.css";

export const metadata = {
  title: "Fire Protection for Hospitals, Industry & Commercial Buildings | Aswin",
  description:
    "Industry-specific fire protection for healthcare, power, manufacturing, IT, hospitality, oil & gas, residential and government facilities across South India.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Fire protection engineered for your industry"
        subtitle="Every sector has its own hazards, codes and operating realities. We have protected hospitals, power plants, IT campuses, hotels and factories, and we design each system around how your facility actually runs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="section">
        <div className="container">
          {industries.map((ind, i) => {
            const relatedProjects = getProjectsByIndustry(ind.slug);
            return (
              <div className={styles.row} id={ind.slug} key={ind.slug}>
                <Reveal className={styles.visual}>
                  <span className={styles.visualPattern} aria-hidden="true" />
                  <span className={styles.visualIcon}>
                    <Icon name={ind.icon} size={26} />
                  </span>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className={styles.title}>{ind.name}</h2>
                  <p className={styles.summary}>{ind.summary}</p>
                  <p className={styles.systemsLabel}>Typical systems</p>
                  <div className={styles.systemsRow}>
                    {ind.typicalSystems.map((s) => (
                      <span className={styles.systemChip} key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className={styles.clientsLine}>
                    <strong>Clients include: </strong>
                    {ind.clients.join(", ")}
                  </p>
                  {relatedProjects.length ? (
                    <Button href={`/projects?industry=${ind.slug}`} variant="link" size="sm">
                      View related projects
                    </Button>
                  ) : null}
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTABand
            title="Don't see your industry?"
            text="Our engineers protect facilities of every kind — talk to a specialist about your site."
            primary={{ label: "Talk to a Specialist", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
