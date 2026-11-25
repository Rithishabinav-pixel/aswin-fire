import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/ui/CTABand";
import Accordion from "@/components/ui/Accordion";
import { generalFaqs } from "@/data/faqs";

export const metadata = {
  title: "Frequently Asked Questions | Aswin Fire System",
  description:
    "Answers to common questions about Aswin Fire's service areas, standards, site surveys, AMC and fire NOC support.",
  alternates: { canonical: "/resources/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subtitle="Answers from our engineers on service areas, standards, surveys and maintenance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "FAQs" },
        ]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: "48rem", marginInline: "auto" }}>
          <Accordion items={generalFaqs} />
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
