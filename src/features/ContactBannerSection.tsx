"use client";

import React from "react";
import ApplyButton from "@/components/Button/ApplyButton";
import styles from "./ContactBannerSection.module.css";

const ContactBannerSection: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <p className={styles.title}>
          {"まずは無料のご相談から、\nお気軽にお問い合わせください。"}
        </p>

        <div className={styles.buttonContainer}>
          <ApplyButton
            fontSize="18px"
            text="無料ご相談はこちら　 ▶︎"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBannerSection;
