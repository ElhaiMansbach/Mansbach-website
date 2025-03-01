"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Burger from "@/svg/header/burger";
import BurgerClose from "@/svg/menu/burger-close";
import styles from "./index.module.scss";

// ניתן לשנות את הנתונים הללו לפי צורך
const menuItems = [
  { text: "דף הבית", route: "/" },
  { text: "תחומי עיסוק", route: "/services" },
  { text: "שומות לדוגמא", route: "/examples" },
  { text: "אודות", route: "/about" },
  { text: "המלצות", route: "/testimonials" },
  { text: "צור קשר", route: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    // קביעת הקישור הפעיל לפי ה-URL הנוכחי
    const path = window.location.pathname;
    setActiveLink(path);

    // הוספת אירוע גלילה כדי לשנות את סגנון ההדר בעת גלילה
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    
    // ניקוי האירוע בעת פירוק הקומפוננטה
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // חסימת גלילת הרקע כאשר התפריט פתוח
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const headerClass = scrolled ? 
    `${styles["header-wrapper"]} ${styles["header-scrolled"]}` : 
    styles["header-wrapper"];

  return (
    <header className={headerClass} id="main-header">
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          {/* לוגו */}
          <div className={styles["header-logo-container"]}>
            <Link href="/" onClick={closeMenu}>
              <div className={styles["header-logo"]}>
                <Image 
                  src="/assets/logos/logo.png" 
                  alt="לוגו" 
                  width={130} 
                  height={40} 
                  priority
                />
              </div>
            </Link>
          </div>

          {/* תפריט ניווט לדסקטופ */}
          <nav className={styles["header-nav-desktop"]}>
            <ul className={styles["header-nav-list"]}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles["header-nav-item"]}>
                  <Link 
                    href={item.route} 
                    className={`${styles["header-nav-link"]} ${activeLink === item.route ? styles["active"] : ""}`}
                  >
                    {item.text}
                    <span className={styles["header-link-indicator"]}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* פעולות נוספות */}
          <div className={styles["header-actions"]}>
            <Link href="/contact" className={styles["header-contact-btn"]}>
              צור קשר
            </Link>

            {/* כפתור המבורגר למובייל */}
            <button 
              className={styles["header-burger-btn"]} 
              onClick={toggleMenu}
              aria-label="תפריט"
            >
              <Burger />
            </button>
          </div>
        </div>
      </div>

      {/* תפריט מובייל */}
      <div className={`${styles["mobile-menu-wrapper"]} ${isMenuOpen ? styles["active"] : ""}`}>
        <div className={styles["mobile-menu"]}>
          {/* כפתור סגירה */}
          <button 
            className={styles["mobile-menu-close"]} 
            onClick={toggleMenu}
            aria-label="סגור תפריט"
          >
            <BurgerClose />
          </button>

          {/* לוגו בתפריט המובייל */}
          <div className={styles["mobile-menu-logo"]}>
            <Image 
              src="/assets/logos/logo.png" 
              alt="לוגו" 
              width={120} 
              height={40} 
            />
          </div>

          {/* קישורי ניווט במובייל */}
          <nav className={styles["mobile-menu-nav"]}>
            <ul className={styles["mobile-menu-list"]}>
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={styles["mobile-menu-item"]}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link 
                    href={item.route} 
                    className={`${styles["mobile-menu-link"]} ${activeLink === item.route ? styles["active"] : ""}`}
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* פרטי קשר בתפריט המובייל */}
          <div className={styles["mobile-menu-contact"]}>
            <h3 className={styles["mobile-menu-heading"]}>צור קשר</h3>
            <div className={styles["mobile-menu-contact-info"]}>
              <p className={styles["mobile-menu-contact-item"]}>
                <span className={styles["mobile-menu-contact-icon"]}>📞</span>
                <span>03-1234567</span>
              </p>
              <p className={styles["mobile-menu-contact-item"]}>
                <span className={styles["mobile-menu-contact-icon"]}>✉️</span>
                <span>info@example.co.il</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* שכבת רקע כהה */}
        <div className={styles["mobile-menu-backdrop"]} onClick={toggleMenu}></div>
      </div>
    </header>
  );
}

export default Header;