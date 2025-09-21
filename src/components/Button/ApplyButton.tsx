"use client";

import React, { useEffect } from "react";

interface Props {
  text: string;
  fontSize?: string;
  color?: string;
  isTop?: boolean;
}

const ApplyButton = ({
  text,
  fontSize = "0.8rem",
  color = "linear-gradient(to right, #43cea2, #185a9d)",
  isTop = false,
}: Props) => {
  // 一度だけ keyframes を style タグで注入
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gradientAnimation {
        0% {
          background-position: 100% 50%;
        }
        50% {
          background-position: 0% 50%;
        }
        100% {
          background-position: 100% 50%;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Apply Button"
      style={{
        background: color,
        color: "white",
        fontSize: fontSize,
        borderRadius: "50px",
        padding: "10px 20px",
        border: isTop ? "none" : "1px solid white",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundSize: "200% 200%",
        animation: "gradientAnimation 7s ease infinite",
        animationDirection: "alternate",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, {
          background: "linear-gradient(to right, #3cb9a0, #164e8d)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        });
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, {
          background: color,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        });
      }}
    >
      {text}
    </button>
  );
};

export default ApplyButton;
