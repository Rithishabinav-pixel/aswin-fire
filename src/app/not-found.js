import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export const metadata = {
  title: "Page Not Found | Aswin Fire System",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="section section--dark blueprint-grid"
      style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}
    >
      <div className="container" style={{ maxWidth: "36rem", textAlign: "center", marginInline: "auto" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(215,38,30,0.15)",
            color: "var(--red-500)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 1.75rem",
          }}
        >
          <Icon name="flame" size={34} />
        </div>
        <p className="eyebrow" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>404</p>
        <h1 style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)", color: "var(--paper)", marginBottom: "1rem" }}>
          This page has moved or no longer exists
        </h1>
        <p style={{ color: "var(--ink-200)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Try our Solutions, Projects or Contact pages, or call us on {company.phone.office}.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button href="/solutions" variant="primary">
            Solutions
          </Button>
          <Button href="/projects" variant="onDark" showIcon={false}>
            Projects
          </Button>
          <Button href="/contact" variant="onDark" showIcon={false}>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
