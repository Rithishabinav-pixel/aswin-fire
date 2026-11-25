import PageHero from "@/components/sections/PageHero";
import { company } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | Aswin Fire System",
  description: "How Aswin Fire System collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: "42rem", marginInline: "auto" }}>
          <div style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.0625rem" }}>
            <p style={{ marginBottom: "1.5rem", color: "var(--ink-500)", fontSize: "0.9375rem" }}>
              This is a standard template provided for development purposes. {company.legalName}{" "}
              should review this policy with a qualified advisor before the site goes live.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Information we collect</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              When you submit an enquiry, request a quote, apply for a role, or request a
              download through this website, we collect the information you provide, such
              as your name, company, phone number, email address, site location and any
              files you choose to upload.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>How we use your information</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              We use the information you submit to respond to your enquiry, prepare
              quotations and proposals, schedule site surveys, process job applications,
              and send the documents you request. We do not sell your information to third
              parties.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Cookies and analytics</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              This website may use cookies and analytics tools to understand how visitors
              use the site and to improve its content and performance. You can control
              cookies through your browser settings.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>WhatsApp contact</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              If you contact us via WhatsApp, that conversation is subject to WhatsApp&rsquo;s
              own privacy policy as well as this one. We use WhatsApp messages only to
              respond to your enquiry.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Data retention</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              We retain enquiry and project information for as long as reasonably necessary
              to deliver our services, maintain project records and comply with legal
              obligations.
            </p>

            <h2 style={{ fontSize: "1.25rem", margin: "2rem 0 0.75rem" }}>Contact us</h2>
            <p>
              For questions about this policy, contact us at {company.email} or{" "}
              {company.phone.office}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
