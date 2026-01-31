"use client"

import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

interface Props {
  videoId?: string;
  imgSrc?: string;
  title: string;
  alt: string;
  description: string;
  fontSize: number;
  plan: "light" | "basic" | "standard";
  isMobile: boolean;
}

const YoutubeCard: React.FC<Props> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const opts = {
    width: props.isMobile ? 300 : 400,
    height: 225, // 16:9 aspect ratio for 400px width
    playerVars: {
      autoplay: 0,
    },
  };

  const baseCellStyle: React.CSSProperties = {
    backgroundColor: "#383E86",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: 8,
    fontSize: 12,
    whiteSpace: "nowrap",
    textAlign: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#F5FBFE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: props.isMobile ? "column" : "row",
          alignItems: "flex-start",
          width: props.isMobile ? "80%" : "90%",
          paddingBottom: 32,
          boxSizing: "border-box",
          gap: 16,
        }}
      >
        {props.videoId && mounted && (
          <YouTube videoId={props.videoId} opts={opts} loading="lazy" />
        )}
        {!props.videoId && props.imgSrc && (
          <div style={{ 
            position: 'relative', 
            width: props.isMobile ? "100%" : 400,
            height: props.isMobile ? "auto" : 225,
            aspectRatio: "16/9"
          }}>
            <Image
              src={`/images/${props.imgSrc}`}
              alt={props.alt}
              fill
              loading="lazy"
              style={{
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: props.isMobile ? 8 : 16 }}>
          <div style={{ fontWeight: "bold", fontSize: 18 }}>{props.title}</div>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>{props.description}</div>

          <div
            style={{
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 4,
              color: "#383E86",
            }}
          >
            {props.plan === "light"
              ? "ライトプラン(初期費用 0円 + 20 %)"
              : props.plan === "basic"
              ? "スタンダードプラン(初期費用 15万円(税抜) + 20 %)"
              : "フルプラン(初期費用 30万円(税抜) + 20 %)"}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 16 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {["海外配送代行", "商品選定", "ページ運営"].map((text, idx) => (
                <div key={idx} style={baseCellStyle}>{text}</div>
              ))}
            </div>

            {(props.plan === "basic" || props.plan === "standard") && (
              <div style={{ display: "flex", gap: 8 }}>
                {["ページ制作(構成・翻訳)", "集客戦略"].map((text, idx) => (
                  <div key={idx} style={baseCellStyle}>{text}</div>
                ))}
              </div>
            )}

            {props.plan === "standard" && (
              <div style={{ display: "flex", gap: 8 }}>
                {["画像撮影・編集", "動画撮影・編集"].map((text, idx) => (
                  <div key={idx} style={baseCellStyle}>{text}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          width: "90%",
          height: 1,
          backgroundColor: "#e0e7ef",
          marginBottom: 16,
        }}
      />
    </div>
  );
};

export default YoutubeCard;
