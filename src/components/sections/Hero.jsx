import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Slider from "@/components/ui/Slider";
import styles from "./Hero.module.css";

const slides = [
  {
    eyebrow: "Fire & life-safety engineering",
    title: (
      <>
        End-to-end fire protection engineering for{" "}
        <span className={styles.titleAccent}>hospitals, industry</span> and critical
        infrastructure
      </>
    ),
    subtitle:
      "From design and supply to installation, commissioning and annual maintenance — one accountable partner for code-compliant fire and life-safety systems across South India.",
    ctas: [
      { label: "Get a Quote", href: "/contact", variant: "primary" },
      { label: "Book a Free Site Survey", href: "/contact#survey", variant: "onDark", showIcon: false },
    ],
    glow: "red",
  },
  {
    eyebrow: "Engineered to code",
    title: (
      <>
        Designed to <span className={styles.titleAccent}>NFPA, FM, UL</span> and the
        National Building Code of India
      </>
    ),
    subtitle:
      "Every system we deliver is documented, tested and commissioned to the standard your consultants, insurers and fire officials expect.",
    ctas: [{ label: "Explore Solutions", href: "/solutions", variant: "primary" }],
    glow: "amber",
  },
  {
    eyebrow: "AMC & maintenance",
    title: (
      <>
        Annual maintenance that keeps your systems{" "}
        <span className={styles.titleAccent}>ready to perform</span>
      </>
    ),
    subtitle:
      "Scheduled inspections, testing and breakdown support for hydrants, alarms and suppression systems — so the system that must work, works.",
    ctas: [{ label: "Request AMC Quote", href: "/amc-maintenance", variant: "primary" }],
    glow: "red",
  },
];

function HeroSlide({ slide }) {
  return (
    <div className={styles.slide}>
      <div className={styles.bg} aria-hidden="true">
        <span className="blueprint-grid" style={{ position: "absolute", inset: 0 }} />
        <span className={`${styles.glow1} ${slide.glow === "amber" ? styles.amber : ""}`} />
        <span className={styles.glow2} />
      </div>

      <div className={`container ${styles.content}`}>
        <div>
          <p className={`eyebrow ${styles.eyebrow}`}>{slide.eyebrow}</p>
          <h1 className={styles.title}>{slide.title}</h1>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <div className={styles.ctaRow}>
            {slide.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant} showIcon={cta.showIcon}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.markWrap} aria-hidden="true">
          <span className={styles.markGlow}>
            <Image src="/brand/icon.png" alt="" fill sizes="360px" style={{ objectFit: "contain" }} priority />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.heroSlider}>
      <Slider
        slides={slides.map((s, i) => <HeroSlide slide={s} key={i} />)}
        autoPlay
        interval={7000}
        variant="dark"
        ariaLabel="Homepage highlights"
        insetArrows
        overlayDots
      />
      <div className={`container ${styles.scrollCue}`}>
        <span className={styles.scrollLine} />
        <Reveal as="span">Trusted by hospitals, enterprises and industry across South India</Reveal>
      </div>
    </section>
  );
}
