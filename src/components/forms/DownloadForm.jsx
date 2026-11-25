"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import styles from "./DownloadForm.module.css";

// UI-only form: this build has no backend, so submission is simulated.
export default function DownloadForm({ documents }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <Icon name="check-circle" size={22} />
        Thanks — check your email for the download link.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="dl-name">Name</label>
          <input id="dl-name" name="name" type="text" required placeholder="Your full name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="dl-company">Company</label>
          <input id="dl-company" name="company" type="text" placeholder="Organisation name" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="dl-email">Email</label>
          <input id="dl-email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="dl-phone">Phone (optional)</label>
          <input id="dl-phone" name="phone" type="tel" placeholder="Mobile number" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="dl-document">Document</label>
        <select id="dl-document" name="document" required defaultValue="">
          <option value="" disabled>
            Select a document
          </option>
          {documents.map((d) => (
            <option value={d} key={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="primary" showIcon={false} full>
        Request Download
      </Button>
    </form>
  );
}
