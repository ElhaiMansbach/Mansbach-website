import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-content"]}>
          <p className={styles["footer-all-rights-reserved"]}>
            © {currentYear} כל הזכויות שמורות
          </p>

          <div className={styles["footer-nav-container"]}>
            <ul className={styles["footer-nav-list"]}>
              <li className={styles["footer-nav-item"]}>
                <a href="/terms" className={styles["footer-link"]}>
                  תנאים
                </a>
              </li>
              <li className={styles["footer-nav-item"]}>
                <a href="/privacy" className={styles["footer-link"]}>
                  פרטיות
                </a>
              </li>
              <li className={styles["footer-nav-item"]}>
                <a href="/contact" className={styles["footer-link"]}>
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["footer-social"]}>
            <a href="#" className={styles["footer-social-link"]}>
              {/* Facebook icon */}
            </a>
            <a href="#" className={styles["footer-social-link"]}>
              {/* Instagram icon */}
            </a>
            <a href="#" className={styles["footer-social-link"]}>
              {/* Twitter icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
