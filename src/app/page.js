import styles from "./page.module.scss";
import ServiceCar from "@/containers/home-page/service-card";
import AboutSection from "@/containers/home-page/about-section";
import TestimonialsSection from "@/containers/home-page/Testimonials-section";
import ContactSection from "@/containers/home-page/contact-section";
import CtaSection from "@/containers/home-page/cta-section";
import VideoHeroSection from "@/containers/home-page/video-hero-section";
import Burger from "@/svg/header/burger";

export default function Home() {
  return (
    <div className={styles.HomeWrapper}>
      <VideoHeroSection 
        videoSrc="/assets/videos/fire.mp4"
        // posterImage="/assets/images/video-poster.jpg"
        autoPlay={true}
        muted={true}
        loop={true}
        isBackgroundVideo={true}
        overlayOpacity={0.5}
        hideVideoControls={false} 
      />
      {/* <ServiceCar />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection /> */}
      {/* <CtaSection /> */}
    </div>
  );
}
