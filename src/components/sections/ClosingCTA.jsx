import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import CallBackForm from "@/components/forms/CallBackForm";
import { company } from "@/data/company";
import styles from "./ClosingCTA.module.css";

export default function ClosingCTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className={styles.wrap}>
          <span className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <h2 className={styles.title}>
              Planning a new facility or upgrading your fire safety?
            </h2>
            <p className={styles.text}>
              Talk to our engineers for a free site survey and a detailed,
              code-compliant proposal.
            </p>
            <div className={styles.contactRow}>
              <span className={styles.contactItem}>
                <Icon name="phone" size={18} />
                {company.phone.office}
              </span>
              <span className={styles.contactItem}>
                <Icon name="message-circle" size={18} />
                {company.phone.mobile}
              </span>
            </div>
          </div>
          <div className={styles.formWrap}>
            <CallBackForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
