// src/containers/home-page/video-hero-section/index.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";
import Video from "@/components/video";

const VideoHeroSection = ({
  videoSrc = "/assets/videos/hero-video.mp4",
  posterImage = "/assets/images/video-poster.jpg",
  title = "פתרונות איכותיים בהתאמה אישית",
  subtitle = "אנו מספקים שירותים מקצועיים ברמה הגבוהה ביותר, עם דגש על פתרונות מותאמים אישית לכל לקוח ולקוח",
  primaryButtonText = "צור קשר",
  secondaryButtonText = "השירותים שלנו",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/services",
  autoPlay = true,
  muted = true,
  loop = true,
  isBackgroundVideo = true,
  overlayOpacity = 0.5,
  hideVideoControls = false, 
}) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // אפקט כניסה אחרי טעינת הדף
    setIsVisible(true);
  }, []);

  const handlePrimaryButtonClick = () => {
    window.location.href = primaryButtonLink;
  };

  const handleSecondaryButtonClick = () => {
    window.location.href = secondaryButtonLink;
  };

  return (
    <section className={styles.videoHero}>
      <div className={styles.videoContainer}>
        <Video
          ref={videoRef}
          src={videoSrc}
          className={`${styles.videoComponent} ${isBackgroundVideo ? styles.backgroundVideo : ""}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          poster={posterImage}
          hideButton={hideVideoControls}
        />
        
        {isBackgroundVideo && (
          <div 
            className={styles.overlay}
            style={{ opacity: overlayOpacity }}
          ></div>
        )}
      </div>

      <div className={styles.contentContainer}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <h1 className={styles.title}>
            {title.split(' ').map((word, index, array) => 
              index === array.length - 1 ? 
                <span key={index} className={styles.highlight}>{word}</span> : 
                <span key={index}>{word} </span>
            )}
          </h1>
          
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.buttonContainer}>
            <Button 
              text={primaryButtonText} 
              className={styles.primaryButton}
              onClick={handlePrimaryButtonClick}
            />
            
            <Button 
              text={secondaryButtonText} 
              className={styles.secondaryButton}
              onClick={handleSecondaryButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSection;