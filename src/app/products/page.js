import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { productCategories } from "@/data/products";
import { company } from "@/data/company";
import styles from "./Products.module.css";

export const metadata = {
  title: "Fire Fighting Equipment & Fire Tender Vehicles | Aswin Fire",
  description:
    "Fire tenders, trailer pumps, foam and DCP units, hydrant equipment, extinguishers and suppression products from trusted international manufacturers.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & equipment"
        title="Fire fighting equipment & vehicles"
        subtitle="Alongside complete systems, we supply proven fire fighting equipment and mobile fire units, selected from trusted manufacturers and backed by our installation and service teams."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {productCategories.map((p, i) => (
              <Reveal delay={i * 70} className={styles.card} key={p.slug}>
                <span className={styles.iconWrap}>
                  <Icon name={p.icon} size={24} />
                </span>
                <h3 className={styles.title}>{p.name}</h3>
                <p className={styles.text}>{p.description}</p>
                <Button href="/contact" variant="link" size="sm">
                  Enquire
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="Brands we work with" title="Authorised to supply and install" />
          <div style={{ marginTop: "2.5rem" }}>
            <LogoMarquee items={company.brands} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTABand
            title="Need equipment for a specific requirement?"
            text="Tell us what you need and our team will recommend the right equipment for your site."
            primary={{ label: "Send an Enquiry", href: "/contact" }}
            secondary={{ label: "Download Product Catalogue", href: "/resources" }}
          />
        </div>
      </section>
    </>
  );
}
