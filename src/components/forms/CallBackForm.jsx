"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import styles from "./CallBackForm.module.css";

// UI-only form: this build has no backend, so submission is simulated on
// the client and simply confirms receipt of the details entered.
export default function CallBackForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Icon name="check-circle" size={22} />
        Thanks — our engineering team will call you back shortly.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cb-name">Name</label>
          <input id="cb-name" name="name" type="text" required placeholder="Your full name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="cb-phone">Phone</label>
          <input id="cb-phone" name="phone" type="tel" required placeholder="Mobile number" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cb-company">Company</label>
          <input id="cb-company" name="company" type="text" placeholder="Organisation name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="cb-requirement">Requirement</label>
          <input id="cb-requirement" name="requirement" type="text" placeholder="e.g. Sprinkler system" />
        </div>
      </div>
      <Button type="submit" variant="primary" showIcon={false} full>
        Request a Call Back
      </Button>
    </form>
  );
}
