// src/components/home/ContactSection.js
"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // בפרודקשן כאן יהיה קוד לשליחת הטופס לשרת
    // לצורך הדגמה נדמה שליחה מוצלחת אחרי השהייה
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // איפוס הטופס והמסר הצלחה אחרי 3 שניות
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>צור</span> קשר
          </h2>
          <p className={styles.subtitle}>
            מלאו את הטופס ונחזור אליכם בהקדם האפשרי
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-4.702-2.048 12.442 12.442 0 0 1-2.049-4.701z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>טלפון</h4>
                <p className={styles.infoText}>03-1234567</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>אימייל</h4>
                <p className={styles.infoText}>info@example.co.il</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>כתובת</h4>
                <p className={styles.infoText}>רחוב הרצל 123, תל אביב</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>שם מלא</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>אימייל</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>טלפון</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>הודעה</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <Button
              text={isSubmitting ? "שולח..." : "שלח פנייה"}
              className={styles.submitBtn}
              type="submit"
              disabled={isSubmitting}
            />

            {submitSuccess && (
              <div className={styles.successMessage}>
                הפנייה נשלחה בהצלחה! נחזור אליך בהקדם.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;