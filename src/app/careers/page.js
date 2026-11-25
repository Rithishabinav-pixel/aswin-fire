import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import CareersForm from "@/components/forms/CareersForm";

export const metadata = {
  title: "Careers | Build a Career in Fire Safety Engineering | Aswin Fire",
  description:
    "Join Aswin Fire as a design engineer, site supervisor, technician or service engineer. Send your CV and we will contact you when a suitable role opens.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career in fire safety engineering"
        subtitle="We are always looking for design engineers, site supervisors, technicians and service engineers who take safety seriously."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: "36rem", marginInline: "auto" }}>
          <Reveal as="p" style={{ color: "var(--ink-700)", lineHeight: 1.7, marginBottom: "2.5rem", fontSize: "1.0625rem" }}>
            Send us your CV and we will contact you when a suitable role opens.
          </Reveal>
          <Reveal
            delay={80}
            style={{
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--line)",
              background: "var(--warm-50)",
            }}
          >
            <CareersForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
