import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Facebook", 
      url: "https://facebook.com", 
      icon: "/assets/icons/facebook.svg" 
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com", 
      icon: "/assets/icons/instagram.svg" 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com", 
      icon: "/assets/icons/linkedin.svg" 
    },
  ];

  const navLinks = [
    { name: "דף הבית", url: "/" },
    { name: "תחומי עיסוק", url: "/services" },
    { name: "אודות", url: "/about" },
    { name: "תנאי שימוש", url: "/terms" },
    { name: "מדיניות פרטיות", url: "/privacy" },
    { name: "צור קשר", url: "/contact" },
  ];

  return (
    <footer className={styles["footer-wrapper"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-main"]}>
          <div className={styles["footer-brand"]}>
            <div className={styles["footer-logo"]}>
              <Image src="/assets/logos/logo.png" alt="לוגו" width={120} height={40} />
            </div>
            <p className={styles["footer-tagline"]}>
              מומחים בתחום המקצועי שלך
            </p>
          </div>

          <div className={styles["footer-nav-section"]}>
            <h3 className={styles["footer-heading"]}>ניווט מהיר</h3>
            <nav className={styles["footer-nav-container"]}>
              <ul className={styles["footer-nav-list"]}>
                {navLinks.map((link, index) => (
                  <li key={index} className={styles["footer-nav-item"]}>
                    <Link href={link.url} className={styles["footer-link"]}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles["footer-contact"]}>
            <h3 className={styles["footer-heading"]}>צור קשר</h3>
            <div className={styles["footer-contact-info"]}>
              <p className={styles["footer-contact-item"]}>
                <span className={styles["footer-contact-icon"]}>📞</span>
                <span>03-1234567</span>
              </p>
              <p className={styles["footer-contact-item"]}>
                <span className={styles["footer-contact-icon"]}>✉️</span>
                <span>info@example.co.il</span>
              </p>
              <p className={styles["footer-contact-item"]}>
                <span className={styles["footer-contact-icon"]}>📍</span>
                <span>רחוב הרצל 123, תל אביב</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-social"]}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={styles["footer-social-link"]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className={styles["footer-social-icon"]}
                />
              </a>
            ))}
          </div>

          <p className={styles["footer-copyright"]}>
            © {currentYear} כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;