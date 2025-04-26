"use client";
import { useState } from "react";
import email from "@/../_content/email.json";
import styles from "@/styles/homepage.module.css";

export default function Contact() {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  return (
    <section id="contact" className={styles.contactDiv}>
      <p>{"Send me an email at "}</p>
      <a href={`mailto:${email}`} className={styles.emailLink}>
        <h3>{email}</h3>
      </a>
      <p>{' or drop a "Hii" in my DMs.'}</p>

      <a onClick={() => setPreviewOpen(true)} className={styles.resumeBtn}>
        View My Resume
      </a>

      {isPreviewOpen && (
        <div className={styles.modalOverlay}>
          <button
            onClick={() => setPreviewOpen(false)}
            className={styles.pdfCloseButton}
          >
            Close Preview
          </button>
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=0"
            className={styles.modalIframe}
            allow="fullscreen"
          />
        </div>
      )}
    </section>
  );
}

