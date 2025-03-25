import React from "react";
import ExpertiseCard from "./expertise-card";
import defaultStyles from "./index.module.scss";

const services = [
  {
    id: 1,
    title: "ייעוץ משפטי",
    description: "ייעוץ משפטי מקצועי בתחומים מגוונים על ידי עורכי דין מנוסים",
    icon: "/assets/icons/icon.svg",
  },
  {
    id: 2,
    title: "שמאות מקרקעין",
    description: "שמאות מקצועית ואמינה לנכסים, דירות ובתים פרטיים",
    icon: "/assets/icons/icon.svg",
  },
  {
    id: 3,
    title: "הערכת שווי",
    description: "הערכות שווי מקצועיות לנכסים, עסקים ופרויקטים שונים",
    icon: "/assets/icons/icon.svg",
  },
  {
    id: 4,
    title: "תכנון וייעוץ",
    description: "ייעוץ בתכנון אדריכלי, הנדסי ופיננסי לפרויקטים",
    icon: "/assets/icons/icon.svg",
  },
];

const OurExpertise = ({ styles = defaultStyles }) => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>תחומי ההתמחות שלנו</h2>
          <p className={styles.subtitle}>
            אנו מציעים מגוון רחב של שירותים מקצועיים, המותאמים לצרכים הספציפיים
            של כל לקוח
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {services.map((service) => (
            <ExpertiseCard
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

export default OurExpertise;
