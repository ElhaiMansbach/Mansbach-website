// src/components/home/TestimonialsSection.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const testimonials = [
  {
    id: 1,
    text: "עבדתי עם החברה בשנתיים האחרונות, והשירות שקיבלתי היה מעל ומעבר. הצוות המקצועי הצליח לתת לי מענה לכל הצרכים שלי, בצורה מהירה ויעילה.",
    name: "יוסי כהן",
    position: 'מנכ"ל חברת בנייה',
    avatar: "/assets/images/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    text: "בעזרת הליווי המקצועי שקיבלתי הצלחתי לחסוך המון זמן וכסף. הייעוץ היה ממוקד ומדויק, והתוצאות בהתאם. ממליץ בחום!",
    name: "ליאת לוי",
    position: 'יזמית נדל"ן',
    avatar: "/assets/images/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    text: "הגישה האישית והמקצועית של הצוות עשתה את כל ההבדל. נהניתי מליווי צמוד ומשירות מעולה לאורך כל תהליך הייעוץ המשפטי.",
    name: "דוד ישראלי",
    position: "בעל עסק",
    avatar: "/assets/images/testimonials/avatar3.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            מה <span className={styles.highlight}>הלקוחות שלנו</span> אומרים
          </h2>
          <p className={styles.subtitle}>
            אנו גאים בשירות שאנו מעניקים ללקוחותינו, ושמחים לשתף את הפידבקים
            שקיבלנו
          </p>
        </div>

        <div className={styles.slider}>
          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonial} ${
                  index === activeIndex ? styles.active : ""
                }`}
              >
                <div className={styles.quote}>״</div>
                <p className={styles.text}>{testimonial.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatarContainer}>
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className={styles.avatar}
                      />
                    ) : (
                      <div className={styles.avatarPlaceholder}></div>
                    )}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.name}>{testimonial.name}</h4>
                    <p className={styles.position}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`עבור לביקורת ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
