"use client"

import React from "react";

interface Props {
  isMobile: boolean;
}

const fontFamilies = {
  jost: "'Jost', 'Helvetica', 'Arial', sans-serif",
  poppins: "'Poppins', 'Helvetica', 'Arial', sans-serif",
  notoSansJP: "'Noto Sans JP', 'Helvetica', 'Arial', sans-serif",
};

const Footer: React.FC<Props> = ({ isMobile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // 同一ページ内のスクロール
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // 別ページへの遷移
      window.location.href = path;
    }
  };

  return (
    <footer
      style={{
        position: "relative",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        background: "linear-gradient(135deg, #383E86 0%, #2C3570 50%, #1E2555 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* 背景装飾 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(67, 206, 162, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(24, 90, 157, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* メインコンテンツ */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "60px 20px 30px" : "80px 40px 40px",
        }}
      >
        {/* 上部セクション */}
        <div
          style={{
            display: isMobile ? "grid" : "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
            gap: isMobile ? "20px" : "60px",
            marginBottom: isMobile ? "40px" : "60px",
          }}
        >
          {/* 会社情報 */}
          <div>
            <div
              style={{
                fontFamily: fontFamilies.notoSansJP,
                fontSize: isMobile ? "28px" : "36px",
                fontWeight: "bold",
                marginBottom: "16px",
                backgroundColor: "#ffffff",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RE-IDEA
            </div>
            <p
              style={{
                fontFamily: fontFamilies.notoSansJP,
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: "1.6",
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "20px",
              }}
            >
              日本企業の海外進出を、私たちが徹底的にサポートいたします。海外クラウドファンディングで新たな可能性を切り開きましょう。
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "20px",
              }}
            >
              {/* SNSアイコン（将来的に追加可能） */}
            </div>
          </div>

          {/* サービス */}
          <div>
            <div style={{ height: isMobile ? "28px" : "0px" }} />
            <h3
              style={{
                fontFamily: fontFamilies.notoSansJP,
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#43CEA2",
              }}
            >
              サービス
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { text: "サービス内容", action: () => handleNavigation("/service") },
                { text: "一連の流れ", action: () => handleNavigation("/flow") },
                { text: "料金プラン", action: () => handleNavigation("/pricing") },
                { text: "コラム", action: () => handleNavigation("/column") },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <button
                    onClick={item.action}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobile ? "13px" : "14px",
                      fontFamily: fontFamilies.notoSansJP,
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#43CEA2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                    }}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3
              style={{
                fontFamily: fontFamilies.notoSansJP,
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#43CEA2",
              }}
            >
              その他
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { text: "導入事例", action: () => handleNavigation("/#works") },
                { text: "私たちにできること", action: () => handleNavigation("/#about") },
                { text: "海外クラファンのメリット", action: () => handleNavigation("/#merit") },
                { text: "私たちの強み", action: () => handleNavigation("/#service") },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <button
                    onClick={item.action}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobile ? "13px" : "14px",
                      fontFamily: fontFamilies.notoSansJP,
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#43CEA2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                    }}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3
              style={{
                fontFamily: fontFamilies.notoSansJP,
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#43CEA2",
              }}
            >
              お問い合わせ
            </h3>
            <div style={{ marginBottom: "16px" }}>
              <p
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  margin: "0 0 8px 0",
                  fontFamily: fontFamilies.notoSansJP,
                }}
              >
                📧 info@re-idea.jp
              </p>
              <p
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  margin: "0 0 16px 0",
                  fontFamily: fontFamilies.notoSansJP,
                }}
              >
                📞 03-6759-9299
              </p>
            </div>
            <button
              onClick={() => handleNavigation("/#contact")}
              style={{
                background: "linear-gradient(45deg, #43CEA2, #185A9D)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                padding: isMobile ? "10px 20px" : "12px 24px",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: "600",
                cursor: "pointer",
                fontFamily: fontFamilies.notoSansJP,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(67, 206, 162, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(67, 206, 162, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(67, 206, 162, 0.3)";
              }}
            >
              無料ご相談はこちら
            </button>
          </div>
        </div>

        {/* 区切り線 */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            margin: isMobile ? "30px 0" : "40px 0",
          }}
        />

        {/* 下部セクション */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "20px" : "0",
          }}
        >
          {/* 法的リンク */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "12px" : "24px" }}>
            <button
              onClick={() => handleNavigation("/privacy-policy")}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: isMobile ? "12px" : "14px",
                fontFamily: fontFamilies.notoSansJP,
                cursor: "pointer",
                padding: 0,
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              プライバシーポリシー
            </button>
            <button
              onClick={() => handleNavigation("/commercial-transaction")}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: isMobile ? "12px" : "14px",
                fontFamily: fontFamilies.notoSansJP,
                cursor: "pointer",
                padding: 0,
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              特定商取引法に基づく記載
            </button>
          </div>

          {/* コピーライトとトップに戻る */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "16px" : "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: isMobile ? "12px" : "14px",
                color: "rgba(255, 255, 255, 0.6)",
                fontFamily: fontFamilies.notoSansJP,
              }}
            >
              <span>©</span>
              <span>2025 RE-IDEA. All rights reserved.</span>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                color: "white",
                fontSize: isMobile ? "12px" : "14px",
                fontFamily: fontFamilies.notoSansJP,
                padding: isMobile ? "8px 16px" : "10px 20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(67, 206, 162, 0.2)";
                e.currentTarget.style.borderColor = "rgba(67, 206, 162, 0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>↑</span>
              <span>トップに戻る</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;