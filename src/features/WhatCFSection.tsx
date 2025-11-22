"use client";

import React from "react";
import { ResponsiveImage } from "@/components/Image/ResponsiveImage";
import styles from "./WhatCFSection.module.css";

export default function WhatCFSection({ isMobile }: { isMobile?: boolean }) {
  const title = "海外クラファンとは？";
  const subTitle = "海外クラウドファンディングとは";

  const description = isMobile === undefined || isMobile === true
    ? "海外クラウドファンディングでは、在庫を抱える心配がなく、低リスクで受注生産型の販売が可能です。また、実際の海外市場でテストマーケティングを行い、販路を拡大することもできます。"
    : "海外クラウドファンディングでは、在庫を抱える心配がなく、低リスクで受注生産型の販売が可能です。また、実際の海外市場でテストマーケティングを行い、販路を拡大することもできます。\n弊社では、日本の事業者様に対して、この海外クラウドファンディングへの挑戦に関わる全てを一括でサポートさせていただいております。";

  return (
    <div className={styles.container}>
      <ResponsiveImage
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        alt="world image"
        src="WORLD.png"
        fill={true}
      />

      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>
            {subTitle}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
        </div>

        <div className={styles.image}>
          <ResponsiveImage
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="what is overseas crowdfunding"
            src="WHATSCF.png"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
