import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export const metadata = {
  title: "Thank You | Aswin Fire System",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: "36rem", textAlign: "center", marginInline: "auto" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "var(--red-50)",
            color: "var(--red-600)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 1.75rem",
          }}
        >
          <Icon name="check-circle" size={36} />
        </div>
        <h1 style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)", marginBottom: "1rem" }}>
          Thank you — we&rsquo;ve received your enquiry
        </h1>
        <p style={{ color: "var(--ink-500)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Our engineering team will contact you within 2 working hours. For anything
          urgent, call {company.phone.office} or {company.phone.mobile}.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button href="/resources">Download our Company Profile</Button>
          <Button href="/projects" variant="secondary" showIcon={false}>
            See our projects
          </Button>
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/" style={{ color: "var(--ink-500)", fontSize: "0.9375rem" }}>
            ← Back to homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
