// src/components/home/CtaSection.js
import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";

const CtaSection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            מוכנים להתחיל? <span className={styles.highlight}>צרו איתנו קשר עכשיו</span>
          </h2>
          <p className={styles.text}>
            אנחנו כאן כדי לעזור לכם להשיג את המטרות שלכם. פנו אלינו עוד היום לפגישת ייעוץ ראשונית.
          </p>
          <div className={styles.buttons}>
            <Button text="קבע פגישת ייעוץ" className={styles.primaryButton} />
            <Button text="מידע נוסף" className={styles.secondaryButton} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;