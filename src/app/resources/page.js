import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import ArticleCard from "@/components/ui/ArticleCard";
import Accordion from "@/components/ui/Accordion";
import DownloadForm from "@/components/forms/DownloadForm";
import { blogPosts } from "@/data/blog";
import { generalFaqs } from "@/data/faqs";
import styles from "./Resources.module.css";

export const metadata = {
  title: "Fire Safety Resources, Guides & FAQs | Aswin Fire System",
  description:
    "Practical guides on fire protection systems, codes and maintenance, plus FAQs and downloadable brochures from Aswin Fire's engineers.",
  alternates: { canonical: "/resources" },
};

const documents = [
  {
    title: "Company Profile (PDF)",
    text: "Capabilities, clients, certifications and key projects.",
    icon: "file",
  },
  {
    title: "Solutions Brochure (PDF)",
    text: "All five solution families on a few pages.",
    icon: "file",
  },
  {
    title: "AMC Brochure (PDF)",
    text: "Plans, scope and service commitments.",
    icon: "file",
  },
  {
    title: "Certificates & licences pack",
    text: "For tender and vendor registration.",
    icon: "award",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Fire safety knowledge centre"
        subtitle="Guides, answers and downloads from our engineers, written for facility managers, consultants and building owners."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Downloads</p>
            <div className={styles.docList}>
              {documents.map((d) => (
                <div className={styles.docItem} key={d.title}>
                  <span className={styles.docIcon}>
                    <Icon name={d.icon} size={20} />
                  </span>
                  <div>
                    <h3 className={styles.docTitle}>{d.title}</h3>
                    <p className={styles.docText}>{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className={styles.formCard}>
            <DownloadForm documents={documents.map((d) => d.title)} />
          </Reveal>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <div className={styles.head}>
            <SectionHeading eyebrow="From our engineers" title="Latest guides and articles" />
            <Button href="/resources/blog" variant="secondary">
              View all articles
            </Button>
          </div>
          <div className={styles.grid}>
            {blogPosts.map((p, i) => (
              <ArticleCard post={p} delay={i * 60} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.head}>
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
            <Button href="/resources/faqs" variant="secondary">
              View all FAQs
            </Button>
          </div>
          <Accordion items={generalFaqs.slice(0, 5)} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTABand
            title="Have a question we haven't answered?"
            primary={{ label: "Ask an Engineer", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
