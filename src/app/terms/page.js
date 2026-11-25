import PageHero from "@/components/sections/PageHero";
import { company } from "@/data/company";

export const metadata = {
  title: "Terms & Conditions | Aswin Fire System",
  description: "Terms and conditions for using the Aswin Fire System website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: "42rem", marginInline: "auto" }}>
          <div style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.0625rem" }}>
            <p style={{ marginBottom: "1.5rem", color: "var(--ink-500)", fontSize: "0.9375rem" }}>
              This is a standard template provided for development purposes. {company.legalName}{" "}
              should review these terms with a qualified advisor before the site goes live.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Use of this website</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              This website is provided for general information about {company.legalName}
              &rsquo;s products and services. Content on this site, including text, systems
              information and case studies, does not constitute a formal quotation,
              engineering design or contractual offer unless confirmed in writing by our
              team.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Intellectual property</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              All content on this website, including text, graphics and layout, is the
              property of {company.legalName} unless otherwise stated, and may not be
              reproduced without permission.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Enquiries and quotations</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              Submitting an enquiry or quote request through this website does not create a
              binding contract. All project work is governed by a separate written
              agreement between {company.legalName} and the client.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Limitation of liability</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              While we take care to keep information on this website accurate, {company.legalName}
              {" "}makes no warranty as to its completeness and is not liable for decisions
              made solely on the basis of website content without a confirmed engineering
              assessment.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Governing law</h2>
            <p>
              These terms are governed by the laws of India, with the courts of Chennai,
              Tamil Nadu having jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
