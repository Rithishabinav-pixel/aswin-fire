"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import styles from "./CareersForm.module.css";

const roles = [
  "Design engineer",
  "Site supervisor",
  "Technician",
  "Service engineer",
  "Other",
];

// UI-only form: this build has no backend, so submission is simulated.
export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Icon name="check-circle" size={22} />
        Thanks for applying — we&rsquo;ll be in touch when a suitable role opens.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cr-name">Name</label>
          <input id="cr-name" name="name" type="text" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="cr-phone">Phone</label>
          <input id="cr-phone" name="phone" type="tel" required />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cr-email">Email</label>
          <input id="cr-email" name="email" type="email" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="cr-role">Role of interest</label>
          <select id="cr-role" name="role" required defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((r) => (
              <option value={r} key={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cr-experience">Experience (years)</label>
          <input id="cr-experience" name="experience" type="number" min="0" />
        </div>
        <div className={styles.field}>
          <label htmlFor="cr-cv">CV upload</label>
          <input id="cr-cv" name="cv" type="file" accept=".pdf,.doc,.docx" />
        </div>
      </div>
      <Button type="submit" variant="primary" showIcon={false} full>
        Apply
      </Button>
    </form>
  );
}
