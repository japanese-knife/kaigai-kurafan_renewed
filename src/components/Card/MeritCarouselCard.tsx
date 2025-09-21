"use client"

import React from "react";
import { ResponsiveImage } from "../Image/ResponsiveImage";
import styles from "./MeritCarouselCard.module.css";

interface Props {
  number: string;
  title: string;
  content: string;
  fontSize: number;
  width: number;
  displayImg: boolean;
  img: string;
  alt: string;
}

const MeritCarouselCard: React.FC<Props> = ({
  number,
  title,
  content,
  fontSize,
  width,
  displayImg,
  img,
  alt,
}) => {
  return (
    <div className={styles.card}>
      {displayImg && (
        <ResponsiveImage
          alt={alt}
          src={img}
          width={width * 0.5}
          height={width * 0.5}
          className={styles.image}
        />
      )}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          top: displayImg ? -20 : undefined,
        }}
      >
        <div
          style={{
            fontWeight: 900,
            background: "linear-gradient(to right, #43CEA2 0%, #185A9D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            fontSize: `${fontSize * 3.5}px`,
          }}
        >
          {number}
        </div>
        <h3
          style={{
            fontWeight: 600,
            color: "#202020",
            margin: 0,
            fontSize: `${fontSize + 8}px`,
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontWeight: 400,
            color: "#202020",
            margin: 0,
            lineHeight: "25px",
            fontSize: `${fontSize + 2}px`,
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default MeritCarouselCard;
