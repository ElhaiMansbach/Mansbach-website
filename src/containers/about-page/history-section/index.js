// src/containers/about-page/history-section/index.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const HistorySection = () => {
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

  const timelineItems = [
    {
      year: "2008",
      title: "הקמת המשרד",
      description: "הקמת המשרד על ידי שמאי מקרקעין בעל ניסיון רב בתחום",
    },
    {
      year: "2012",
      title: "התרחבות הצוות",
      description: "הצטרפות שמאים נוספים לצוות המשרד והרחבת תחומי הפעילות",
    },
    {
      year: "2015",
      title: "פתיחת סניף נוסף",
      description: "פתיחת סניף שני בצפון הארץ להנגשת השירות ללקוחות נוספים",
    },
    {
      year: "2020",
      title: "הטמעת טכנולוגיות מתקדמות",
      description: "שילוב כלים טכנולוגיים מתקדמים לשיפור השירות והמקצועיות",
    },
    {
      year: "היום",
      title: "התפתחות מתמדת",
      description: "המשך התפתחות והתמקצעות תוך שמירה על ערכי יסוד ושירות אישי",
    },
  ];

  return (
    <section ref={sectionRef} className={styles.history}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>ההיסטוריה</span> שלנו
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            לאורך השנים, המשרד התפתח והתרחב תוך שמירה על הערכים והאיכות המקצועית
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={`${styles.imageWrapper} ${isVisible ? styles.visible : ""}`}>
              <Image
                src="/assets/images/about-history.jpg"
                alt="התפתחות המשרד לאורך השנים"
                fill
                objectFit="cover"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.timelineItem} ${isVisible ? styles.visible : ""}`}
                  style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                >
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;