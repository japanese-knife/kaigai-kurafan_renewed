import React from "react";
import { ResponsiveImage } from "../Image/ResponsiveImage";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "BACKGROUND.png",
  backgroundColor = "#383E86",
}) => {
  return (
    <div className={styles.heroSection} style={{ backgroundColor }}>
      {backgroundImage && (
        <ResponsiveImage
          src={backgroundImage}
          alt="background"
          fill={true}
          style={{
            position: "absolute",
            zIndex: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.3,
            objectFit: "cover",
          }}
        />
      )}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;