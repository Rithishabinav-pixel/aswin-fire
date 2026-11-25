import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { footerNav } from "@/data/navigation";
import { company } from "@/data/company";
import styles from "./Footer.module.css";

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <Link href="/" className={styles.brand}>
            <span className={styles.logoMark}>
              <Icon name="flame" size={20} strokeWidth={2} />
            </span>
            <span className={styles.logoText}>Aswin Fire</span>
          </Link>
          <p className={styles.about}>
            {company.legalName} designs, installs and maintains fire protection and
            life-safety systems for hospitals, industry and enterprises across South
            India.
          </p>
          <div className={styles.badges}>
            {company.certifications.map((c) => (
              <span className={styles.badge} key={c.label}>
                {c.label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.heading}>Solutions</h3>
          <nav className={styles.links}>
            {footerNav.solutions.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className={styles.heading}>Company</h3>
          <nav className={styles.links}>
            {footerNav.company.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.contactItem}>
            <Icon name="map-pin" size={18} />
            <span>
              {company.address.line1}
              <br />
              {company.address.line2}
            </span>
          </div>
          <div className={styles.contactItem}>
            <Icon name="phone" size={18} />
            <span>
              {company.phone.office}
              <br />
              {company.phone.mobile}
            </span>
          </div>
          <div className={styles.contactItem}>
            <Icon name="mail" size={18} />
            <span>{company.email}</span>
          </div>
          <div className={styles.social}>
            <a href={company.social.facebook} className={styles.socialLink} aria-label="Facebook">
              <Icon name="globe" size={16} />
            </a>
            <a href={company.social.instagram} className={styles.socialLink} aria-label="Instagram">
              <Icon name="camera" size={16} />
            </a>
            <a href={company.social.linkedin} className={styles.socialLink} aria-label="LinkedIn">
              <Icon name="users" size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {company.legalName}. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          {footerNav.legal.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
