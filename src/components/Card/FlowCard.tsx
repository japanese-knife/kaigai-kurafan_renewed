"use client";

import React from "react";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  titleFontSize: number;
  contentFontSize: number;
  spacing?: number;
}

// コンテストのミニカルーセルを実装
const FlowCard: React.FC<Props> = (props) => {
  const borderRadius = 10;
  const spacing = props.spacing ?? 3;
  
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
        paddingBottom: "12px",
        maxWidth: "350px",
      }}
    >
      <div
        style={{
          padding: "6px 0px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#383E86",
          borderTopLeftRadius: `${borderRadius - 4}px`,
          borderTopRightRadius: `${borderRadius - 4}px`
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
      <div
        style={{
          width: "100%",
          padding: `0 ${spacing * 10}px`,
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#202020",
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "Noto Sans JP, Arial, sans-serif",
            height: `${(props.contentFontSize + 2) * 1.5}px`,
            fontSize: `${props.contentFontSize + 2}px`,
            letterSpacing: "1.4px",
            margin: 0,
            lineHeight: 1.5
          }}
        >
          {props.subTitle}
        </span>
        <p
          style={{
            color: "#202020",
            fontWeight: 400,
            fontSize: `${props.contentFontSize}px`,
            letterSpacing: "1.2px",
            margin: 0,
            lineHeight: 1.5,
            padding: "0px 5%"
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default FlowCard;
