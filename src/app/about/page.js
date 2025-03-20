// src/app/about/page.js
import React from "react";
import styles from "./page.module.scss";
import HeroAboutSection from "@/containers/about-page/hero-about-section";
import HistorySection from "@/containers/about-page/history-section";
import ValuesSection from "@/containers/about-page/values-section";
import TeamSection from "@/containers/about-page/team-section";
import CtaSection from "@/containers/home-page/cta-section/index";

export const metadata = {
  title: "אודות - משרד שמאי מקרקעין",
  description: "קצת על המשרד שלנו, הצוות והערכים המנחים אותנו",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <HeroAboutSection />
      <HistorySection />
      <ValuesSection />
      <TeamSection />
      <CtaSection />
    </div>
  );
}