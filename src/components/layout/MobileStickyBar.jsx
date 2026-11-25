import Icon from "@/components/ui/Icon";
import { company } from "@/data/company";
import styles from "./MobileStickyBar.module.css";

export default function MobileStickyBar() {
  return (
    <div className={styles.bar}>
      <a href={`tel:${company.phone.office.replace(/[^\d+]/g, "")}`} className={styles.item}>
        <Icon name="phone" size={18} />
        Call
      </a>
      <a
        href={`https://wa.me/${company.phone.mobile.replace(/[^\d]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.item}
      >
        <Icon name="message-circle" size={18} />
        WhatsApp
      </a>
      <a href="/contact" className={`${styles.item} ${styles.quote}`}>
        <Icon name="file" size={18} />
        Get a Quote
      </a>
    </div>
  );
}
