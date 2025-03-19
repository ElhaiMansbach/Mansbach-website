// src/components/home/ServicesSection.js
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const services = [
  {
    id: 1,
    title: "ייעוץ משפטי",
    description: "ייעוץ משפטי מקצועי בתחומים מגוונים על ידי עורכי דין מנוסים",
    icon: "/assets/icons/legal.svg",
  },
  {
    id: 2,
    title: "שמאות מקרקעין",
    description: "שמאות מקצועית ואמינה לנכסים, דירות ובתים פרטיים",
    icon: "/assets/icons/real-estate.svg",
  },
  {
    id: 3,
    title: "הערכת שווי",
    description: "הערכות שווי מקצועיות לנכסים, עסקים ופרויקטים שונים",
    icon: "/assets/icons/valuation.svg",
  },
  {
    id: 4,
    title: "תכנון וייעוץ",
    description: "ייעוץ בתכנון אדריכלי, הנדסי ופיננסי לפרויקטים",
    icon: "/assets/icons/planning.svg",
  }
];

const ServiceCard = ({ title="hello", description, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {icon ? (
          <Image src={icon} alt={title} width={40} height={40} />
        ) : (
          <div className={styles.iconPlaceholder}></div>
        )}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>תחומי ההתמחות שלנו</h2>
          <p className={styles.subtitle}>
            אנו מציעים מגוון רחב של שירותים מקצועיים, המותאמים לצרכים הספציפיים של כל לקוח
          </p>
        </div>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;