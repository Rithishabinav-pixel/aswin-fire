"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import styles from "./QuoteForm.module.css";

const systemOptions = [
  "Water-based firefighting",
  "Fire alarm",
  "Gas suppression",
  "Passive protection",
  "Security & ELV",
  "Fire vehicles / equipment",
  "AMC",
  "Not sure",
];

const projectTypes = ["New installation", "Upgrade / retrofit", "AMC / service", "Equipment supply"];

// UI-only form: this build has no backend, so submission simply navigates
// to the thank-you page as the brief specifies, without sending any data.
export default function QuoteForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    router.push("/thank-you");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="q-name">
            Full name<span className={styles.required}>*</span>
          </label>
          <input id="q-name" name="name" type="text" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="q-company">
            Company / organisation<span className={styles.required}>*</span>
          </label>
          <input id="q-company" name="company" type="text" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="q-phone">
            Phone / WhatsApp<span className={styles.required}>*</span>
          </label>
          <input id="q-phone" name="phone" type="tel" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="q-email">
            Email<span className={styles.required}>*</span>
          </label>
          <input id="q-email" name="email" type="email" required />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="q-location">
          City / site location<span className={styles.required}>*</span>
        </label>
        <input id="q-location" name="location" type="text" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="q-system">
          System required<span className={styles.required}>*</span>
        </label>
        <select id="q-system" name="system" required defaultValue="">
          <option value="" disabled>
            Select a system
          </option>
          {systemOptions.map((s) => (
            <option value={s} key={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label>
          Project type<span className={styles.required}>*</span>
        </label>
        <div className={styles.radioGroup}>
          {projectTypes.map((t, i) => (
            <label className={styles.radioOption} key={t}>
              <input type="radio" name="projectType" value={t} required defaultChecked={i === 0} />
              {t}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="q-message">Message / project details</label>
        <textarea id="q-message" name="message" placeholder="Tell us about your site and requirement" />
      </div>

      <div className={styles.field}>
        <label htmlFor="q-file">Drawings or BOQ (PDF, DWG, XLS; max 10 MB)</label>
        <input id="q-file" name="file" type="file" className={styles.fileField} accept=".pdf,.dwg,.xls,.xlsx" />
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>
          I agree to be contacted about my enquiry. See our{" "}
          <a href="/privacy-policy">privacy policy</a>.
        </span>
      </label>

      <Button type="submit" variant="primary" showIcon={false} full disabled={submitting}>
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
