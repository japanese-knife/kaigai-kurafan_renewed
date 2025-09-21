"use client";

import React from "react";
import { ResponsiveImage } from "../Image/ResponsiveImage";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  titleFontSize: number;
  contentFontSize: number;
  img_ratio?: string;
  display_img?: boolean;
  alt: string;
}

const ServiceCard: React.FC<Props> = (props) => {
  const borderRadius = 10;
  
  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        border: "2px solid #383E86",
        borderRadius: `${borderRadius}px`,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        paddingBottom: "12px"
      }}
    >
      <div
        style={{
          padding: "8px 0px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#383E86",
          borderTopLeftRadius: `${borderRadius-4}px`,
          borderTopRightRadius: `${borderRadius-4}px`
        }}
      >
        <h2
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: `${props.titleFontSize - 2}px`,
            letterSpacing: "1.2px",
            margin: 0,
            width: "100%",
            textAlign: "center"
          }}
        >
          {props.title}
        </h2>
      </div>
      {props.display_img && (
        <ResponsiveImage
          alt={props.alt}
          src={props.image}
          fill={true}
          aspectRatio="1.2/1"
          style={{
            objectFit: "cover"
          }}
        />
      )}
      <div
        style={{
          width: "100%",
          padding: `0 5%`,
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40px",
            color: "#383E86",
            textAlign: "center",
            fontWeight: 600,
            height: `${(props.contentFontSize + 4) * 1.2 * 2}px`,
            fontSize: `${props.contentFontSize + 4}px`,
            letterSpacing: "1.2px",
            whiteSpace: "pre-wrap",
            margin: 0,
            lineHeight: 1.2
          }}
        >
          {props.subTitle}
        </h3>
        <p
          style={{
            color: "#202020",
            fontSize: `${props.contentFontSize - (window.innerWidth <= 768 ? 2 : 0)}px`,
            fontFamily: "Noto Sans JP, Arial, sans-serif",
            letterSpacing: "1.2px",
            margin: 0,
            lineHeight: 1.5,
            padding: `0 5%`,
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
