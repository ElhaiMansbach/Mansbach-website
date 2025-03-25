import React from "react";
import Image from "next/image";
import defaultStyles from "./index.module.scss";

const ExpertiseCard = ({
  title = "hello",
  description,
  icon,
  styles = defaultStyles,
}) => {
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

export default ExpertiseCard;
