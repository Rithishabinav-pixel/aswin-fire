import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import ClientLogoWall from "@/components/sections/ClientLogoWall";
import Testimonials from "@/components/sections/Testimonials";
import { clientSectors } from "@/data/clients";
import { company } from "@/data/company";
import styles from "./Clients.module.css";

export const metadata = {
  title: "Our Clients | Hospitals, IT, Industry & Hospitality | Aswin Fire",
  description:
    "Apollo Hospitals, CMC Vellore, Hyatt Regency, TCS, Oracle, Siemens and 60+ organisations trust Aswin Fire to protect their people and facilities.",
  alternates: { canonical: "/clients" },
};

const regions = [
  { state: "Tamil Nadu", cities: "Chennai, Coimbatore, Madurai, Hosur, Sriperumbudur, Cuddalore, Kodaikanal" },
  { state: "Andhra Pradesh", cities: "Nellore, Rajahmundry, Sri City" },
  { state: "Telangana", cities: "Hyderabad" },
  { state: "Karnataka", cities: "Bengaluru, Mysuru" },
  { state: "Kerala", cities: "Kochi" },
  { state: "Puducherry", cities: "" },
  { state: "Gujarat", cities: "" },
  { state: "Odisha", cities: "" },
  { state: "Uttar Pradesh", cities: "Varanasi" },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title={`Trusted by ${company.clientsServed} organisations across India`}
        subtitle="Hospitals, global technology companies, banks, manufacturers and hotels rely on Aswin to design, install and maintain their fire protection systems. Many have worked with us for years."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
      />

      <section className="section">
        <div className="container">
          <ClientLogoWall sectors={clientSectors} />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="Regional presence" title="Where we work" />
          <div className={styles.regionGrid}>
            {regions.map((r) => (
              <div className={styles.regionGroup} key={r.state}>
                <span className={styles.regionState}>{r.state}</span>
                {r.cities ? <span className={styles.regionCities}>{r.cities}</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section">
        <div className="container">
          <CTABand
            title="Join the organisations that trust Aswin"
            primary={{ label: "Get a Quote", href: "/contact" }}
            secondary={{ label: "View Case Studies", href: "/projects" }}
          />
        </div>
      </section>
    </>
  );
}
