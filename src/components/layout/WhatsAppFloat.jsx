import Icon from "@/components/ui/Icon";
import { company } from "@/data/company";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${company.phone.mobile.replace(/[^\d]/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Chat with Aswin Fire on WhatsApp"
    >
      <Icon name="message-circle" size={26} strokeWidth={2} />
    </a>
  );
}
