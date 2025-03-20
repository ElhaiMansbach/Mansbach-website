// src/containers/about-page/values-section/index.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const values = [
    {
      icon: "✓",
      title: "מקצועיות",
      description: "אנו מחויבים לרמה מקצועית גבוהה ומתעדכנים באופן תמידי בכל החידושים בתחום"
    },
    {
      icon: "♦",
      title: "יושרה",
      description: "אנו פועלים בשקיפות מלאה ומחויבים ליושרה ואתיקה מקצועית ללא פשרות"
    },
    {
      icon: "★",
      title: "איכות",
      description: "מתן שירות איכותי ומוקפד תוך בדיקה יסודית ותשומת לב לפרטים הקטנים"
    },
    {
      icon: "❤",
      title: "אמינות",
      description: "בניית מערכת יחסים ארוכת טווח המבוססת על אמון הדדי עם לקוחותינו"
    },
    {
      icon: "◉",
      title: "זמינות",
      description: "אנו זמינים ללקוחותינו ומספקים מענה מהיר ויעיל לכל שאלה או בקשה"
    },
    {
      icon: "▲",
      title: "חדשנות",
      description: "שילוב שיטות עבודה וטכנולוגיות מתקדמות לשיפור השירות והתוצאות"
    }
  ];

  return (
    <section ref={sectionRef} className={styles.values}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>הערכים</span> שמנחים אותנו
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            הערכים שלנו הם הבסיס לפעילות המשרד ומנחים אותנו בכל החלטה ופעולה מקצועית
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`${styles.valueCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.iconContainer}>
                <span className={styles.valueIcon}>{value.icon}</span>
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;