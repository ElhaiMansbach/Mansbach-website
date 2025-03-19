// src/components/home/HeroSection.js
"use client";
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Button from "@/components/button";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            פתרונות איכותיים{" "}
            <span className={styles.highlight}>בהתאמה אישית</span>
          </h1>
          <p className={styles.subtitle}>
            אנו מספקים שירותים מקצועיים ברמה הגבוהה ביותר, עם דגש על פתרונות
            מותאמים אישית לכל לקוח ולקוח
          </p>
          <div className={styles.cta}>
            <Button text="צור קשר" className={styles.primaryButton} />
            <Button text="השירותים שלנו" className={styles.secondaryButton} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/hero-image.jpg"
              alt="תמונת כותרת"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
