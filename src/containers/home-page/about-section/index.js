// src/components/home/AboutSection.js
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const stats = [
  { id: 1, value: "15+", label: "שנות ניסיון" },
  { id: 2, value: "500+", label: "פרויקטים" },
  { id: 3, value: "300+", label: "לקוחות מרוצים" },
];

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/profile.jpg"
              alt="קצת עלינו"
              fill
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>קצת <span className={styles.highlight}>עלינו</span></h2>
          
          <p className={styles.text}>
            המשרד שלנו נוסד לפני למעלה מ-15 שנים, ומאז אנו מתמחים במתן שירותים מקצועיים ברמה הגבוהה ביותר.
          </p>
          
          <p className={styles.text}>
            צוות המומחים שלנו כולל עורכי דין, שמאים ויועצים מקצועיים בעלי ניסיון עשיר וידע רב בתחומים מגוונים.
            אנו מאמינים בגישה אישית, מקצועית ויצירתית לכל תיק, תוך הקפדה על סטנדרטים גבוהים ושירות אדיב ומסור.
          </p>
          
          <div className={styles.statsContainer}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;