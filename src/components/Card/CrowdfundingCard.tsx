"use client";

import Image from "next/image";
import React from "react";
import { getProjectImageUrl } from "@/lib/supabase";

interface CrowdfundingCardProps {
  width: number;
  height: number;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  progressPercentage: number;
  thumbnailUrl: string;
  logoUrl?: string;
  iconUrl?: string;
  companyName: string;
  isOpen: boolean;
  isEnded: boolean;
  onClick?: () => void;
  cardFontSize: number;
}

const CrowdfundingCard: React.FC<CrowdfundingCardProps> = ({
  width,
  height,
  title,
  description,
  location,
  endDate,
  progressPercentage,
  thumbnailUrl,
  logoUrl,
  iconUrl,
  companyName,
  isOpen,
  isEnded,
  onClick,
  cardFontSize,
}) => {
  const imageHeight = Math.floor((width * 9) / 16);

  return (
    <div
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        borderRadius: "5px",
        overflow: "hidden",
        marginTop: "5px",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.02)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <div style={{ position: "relative", height: imageHeight, overflow: "hidden" }}>
        <Image
          src={getProjectImageUrl(thumbnailUrl)}
          alt={title}
          width={width}
          height={imageHeight}
          unoptimized
          style={{
            objectFit: "cover"
          }}
        />
        {/* ステータスラベル（右上） */}
        {!isEnded && (!isOpen || (isOpen && !isEnded)) && (
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: !isOpen ? "#383E86" : "rgba(100, 189, 103, 0.95)",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: 12,
              zIndex: 2,
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            {!isOpen ? "準備中" : "公開中"}
          </div>
        )}

        {/* ロゴと会社名（画像の上） */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 20,
            padding: "4px 10px",
            maxWidth: "80%",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {logoUrl && (
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                marginRight: 8,
                flexShrink: 0,
              }}
            >
              <Image
                src={getProjectImageUrl(logoUrl)}
                alt={companyName}
                width={20}
                height={20}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#333",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {companyName}
          </span>
        </div>
      </div>

      <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "0 0 5px 5px" }}>
        {/* アイコン画像 */}
        {iconUrl && (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              marginBottom: 8,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              src={iconUrl}
              alt="Project icon"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        <div
          title={title}
          style={{
            fontWeight: "bold",
            marginBottom: 4,
            fontSize: `${cardFontSize}px`,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            height: `${cardFontSize * 1.5}px`,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: `${cardFontSize * 0.8}px`,
            lineHeight: "1.5",
            height: `${cardFontSize * 0.8 * 1.5 * 2}px`,
            color: "#666",
            marginBottom: 12,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </div>

        <div style={{ marginBottom: 12, height: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div style={{ flexGrow: 1, backgroundColor: "#e0e0e0", borderRadius: 4, height: 8 }}>
              <div
                style={{
                  width: `${Math.min(progressPercentage, 100)}%`,
                  height: "100%",
                  backgroundColor: (isOpen && !isEnded) ? "grey" : "#1565c0",
                  borderRadius: 4,
                }}
              />
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                minWidth: 48,
                textAlign: "right",
                color: (isOpen && !isEnded) ? "grey" : "#1565c0",
              }}
            >
              {(isOpen && !isEnded) ? "-- " : Math.floor(progressPercentage)}%
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.8rem",
            color: "#666",
          }}
        >
          <span>{location}</span>
          <span>{endDate}</span>
        </div>
      </div>
    </div>
  );
};

export default CrowdfundingCard;