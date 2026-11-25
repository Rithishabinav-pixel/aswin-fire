import Reveal from "@/components/ui/Reveal";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { trustLogos } from "@/data/clients";

export default function TrustStrip() {
  return (
    <section className="section--tight" style={{ paddingBlock: "2.5rem", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal
          as="p"
          style={{
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.8125rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink-500)",
            marginBottom: "1.75rem",
          }}
        >
          Trusted by leading hospitals, enterprises and industries
        </Reveal>
        <LogoMarquee items={trustLogos} />
      </div>
    </section>
  );
}
