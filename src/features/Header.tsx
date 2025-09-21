"use client"

import React, { useEffect, useState } from "react";
import ApplyButton from "@/components/Button/ApplyButton";
import { ResponsiveImage } from "@/components/Image/ResponsiveImage";

interface HeaderProps {
  isMobile?: boolean;
  isIpad: boolean;
  headerSize?: number;
}

const Header: React.FC<HeaderProps> = ({ isMobile, isIpad, headerSize = 64 }) => {
  const [fontColor, setFontColor] = useState("#383E86");
  const [open, setOpen] = useState(false);
  const transitionTime = 1.5;
  const fontSize = isMobile ? 12 : 14;

  useEffect(() => {
    const pathname = window.location.pathname;
    if (["/privacyPolicy", "/company"].includes(pathname)) {
      setFontColor("#383E86");
    }

    const handleScroll = () => {
      setOpen(false);
      const meritSection = document.getElementById("news");
      if (meritSection) {
        const meritPosition = meritSection.offsetTop;
        if (window.scrollY >= meritPosition) {
          setFontColor("transparent");
        } else {
          setFontColor("#383E86");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    // ページ遷移が必要な項目
    const pageRoutes: { [key: string]: string } = {
      service: "/service",
      flow: "/flow",
      amount: "/pricing",
      works: "/works",
      column: "/column"
    };

    if (pageRoutes[id]) {
      window.location.href = pageRoutes[id];
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const headerItems = [
    !isIpad ? { text: "サービス内容", id: "service" } : null,
    { text: "一連の流れ", id: "flow" },
    { text: "料金プラン", id: "amount" },
    { text: "コラム", id: "column" },
  ].filter(Boolean) as { text: string; id: string }[];

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `${headerSize}px`,
        width: "100%",
        backgroundColor: fontColor === "#383E86" ? "white" : "transparent",
        transition: `background-color ${transitionTime}s ease`,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "93%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ResponsiveImage
          src="LOGO.png"
          alt="logo"
          width={isMobile === undefined || isMobile === true ? 180 : 250}
          height={isMobile === undefined || isMobile === true ? 36 : 50}
          priority
          aspectRatio="5 / 1"
          style={{
              cursor: "pointer",
              objectFit: "contain",
          }}
          onClick={() => (window.location.href = "/")}
        />

        {isMobile === false ? (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {headerItems.map((item) => (
              <p
                key={item.id}
                onClick={() => handleScroll(item.id)}
                style={{
                  color: "#202020",
                  letterSpacing: 2,
                  fontSize,
                  cursor: "pointer",
                  margin: 0,
                  padding: "4px 8px",
                  transition: `all 0.3s ease`,
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLParagraphElement).style.transform =
                    "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLParagraphElement).style.transform =
                    "scale(1.0)";
                }}
                onMouseDown={(e) => {
                  (e.currentTarget as HTMLParagraphElement).style.transform =
                    "scale(0.95)";
                }}
                onMouseUp={(e) => {
                  (e.currentTarget as HTMLParagraphElement).style.transform =
                    "scale(1.1)";
                }}
              >
                {item.text}
              </p>
            ))}
            <div style={{display: "flex", justifyContent: "center", paddingLeft: "12px"}}>
              <ApplyButton text="無料ご相談はこちら" />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 2,
            }}
            aria-label="menu-button"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill={"#383E86"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" />
            </svg>
          </button>
        )}
      </div>

      {/* ドロワー */}
      {/* オーバーレイ */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 15,
            opacity: open ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          onClick={() => setOpen(false)}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-280px",
          width: "280px",
          height: "100%",
          background: "white",
          boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          transition: "right 0.3s ease",
        }}
      >
        {/* ヘッダー部分 */}
        <div style={{ 
          background: "#383E86",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "700",
          }}>
            メニュー
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "white",
              padding: "4px",
            }}
            aria-label="close-button"
          >
            ✕
          </button>
        </div>

        {/* メニュー項目 */}
        <div style={{ 
          flex: 1, 
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}>
          <ul style={{ 
            listStyle: "none", 
            padding: "0 20px",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "4px"
          }}>
          {[
            { text: "サービス内容", id: "service" },
            { text: "一連の流れ", id: "flow" },
            { text: "料金プラン", id: "amount" },
            { text: "コラム", id: "column" },
          ].map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleScroll(item.id);
                setOpen(false);
              }}
              style={{
                padding: "16px 0",
                cursor: "pointer",
                color: "#333",
                  fontSize: "16px",
                  fontWeight: "600",
                borderBottom: "1px solid #eee",
                transition: "color 0.2s ease",
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.color = "#43CEA2";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.color = "#333";
              }}
            >
              {item.text}
            </li>
          ))}
          </ul>

          {/* お問い合わせボタン */}
          <div
            style={{ 
              width: "100%", 
              display: "flex", 
              justifyContent: "center",
              padding: "20px 20px 0 20px"
            }}
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => {
                handleScroll("contact");
                setOpen(false);
              }}
              style={{
                background: "#43CEA2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                width: "100%",
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.backgroundColor = "#3cb9a0";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.backgroundColor = "#43CEA2";
              }}
            >
              無料ご相談はこちら
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
