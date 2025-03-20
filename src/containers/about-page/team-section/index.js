// src/containers/about-page/team-section/index.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "יוסי ישראלי",
      position: "מייסד ומנהל המשרד",
      description: "שמאי מקרקעין מוסמך מעל 20 שנה, בעל ניסיון עשיר בשוק הנדל״ן הישראלי",
      image: "/assets/images/team/team1.jpg"
    },
    {
      name: "מיכל כהן",
      position: "שמאית מקרקעין",
      description: "שמאית מקרקעין מוסמכת מעל 12 שנה, מתמחה בשמאות למגורים ומסחר",
      image: "/assets/images/team/team2.jpg"
    },
    {
      name: "אמיר לוי",
      position: "יועץ משפטי",
      description: "עורך דין בעל התמחות בנדל״ן, מלווה את המשרד בהיבטים משפטיים מורכבים",
      image: "/assets/images/team/team3.jpg"
    },
    {
      name: "גלית אברהם",
      position: "כלכלנית",
      description: "כלכלנית עם התמחות בניתוח כדאיות כלכלית של פרויקטים בתחום הנדל״ן",
      image: "/assets/images/team/team4.jpg"
    },
  ];

  return (
    <section ref={sectionRef} className={styles.team}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>הצוות</span> המקצועי שלנו
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            הצוות שלנו מורכב ממומחים מהשורה הראשונה בתחומם, בעלי ניסיון וידע מקצועי עשיר
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`${styles.teamCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={280}
                      height={280}
                      className={styles.memberImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}></div>
                  )}
                </div>
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberPosition}>{member.position}</p>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;