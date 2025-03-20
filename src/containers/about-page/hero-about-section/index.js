// src/containers/about-page/hero-section/index.js
"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const HeroAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // אנימציה פשוטה בטעינת הקומפוננטה
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.heroAbout}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>אודות</span> המשרד שלנו
          </h1>
          <div className={styles.underline}></div>
          <p className={styles.text}>
            המשרד שלנו נוסד לפני למעלה מ-15 שנים מתוך רצון לספק שירותי שמאות מקרקעין
            ברמה המקצועית הגבוהה ביותר, תוך מתן פתרונות יצירתיים ואיכותיים לכל לקוח.
            מאז הקמתו, המשרד מלווה באמונה מקצועית וערכית את לקוחותיו הרבים בשוק הנדל״ן
            בישראל.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;