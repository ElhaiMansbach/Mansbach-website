import Button from "@/components/button";
import Image from "next/image";
import styles from "./page.module.scss";
import HeroSection from "@/containers/home-page/hero-section";
import ServiceCar from "@/containers/home-page/service-card";
import AboutSection from "@/containers/home-page/about-section";
import TestimonialsSection from "@/containers/home-page/Testimonials-section";
import ContactSection from "@/containers/home-page/contact-section";
import CtaSection from "@/containers/home-page/cta-section";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ServiceCar/>
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
    </div>
  );
}
