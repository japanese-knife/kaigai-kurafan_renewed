"use client";

import React from "react";
import TitleColumn from "@/components/SectionTitle";

type Cell =
  | {
      text: string | React.ReactNode;
      color?: string;
      bold?: boolean;
      fontSize?: number;
    }
  | { icon: "circle" | "times"; color: string };

const plans = [
  { name: "ライトプラン", color: "#2CB5C4" },
  { name: "スタンダードプラン", color: "#3B8AC4" },
  { name: "フルプラン", color: "#6B5ACD", backgroundColor: "rgb(60, 185, 160)" },
  { name: "プレミアムプラン\n(サイト構築/運用)", color: "#8B5CF6" },
  { name: "他社事例", color: "#888888" },
];

const rows: { label: string; values: Cell[] }[] = [
  {
    label: "初期費用",
    values: [
      { text: "¥ 0", color: "#D32F2F", bold: true, fontSize: 22 },
      {
        text: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: 60}}>
            <span style={{ textDecoration: "line-through", color: "#383E86", fontSize: 12 }}>
              ¥ 198,000
            </span>
            <span style={{ color: "#D32F2F", fontWeight: 700, fontSize: 22, lineHeight: 1.2 }}>¥ 148,000</span>
            <span style={{ color: "#383E86", fontSize: 9 }}>
              (税込162,800円)
            </span>
          </div>
        ),
        bold: true,
      },
      {
        text: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: 60}}>
                <span style={{ textDecoration: "line-through", color: "#383E86", fontSize: 12 }}>
                ¥ 398,000
                </span>
                <span style={{ color: "#D32F2F", fontWeight: 700, fontSize: 22, lineHeight: 1.2 }}>¥ 298,000</span>
                <span style={{ color: "#383E86", fontSize: 9 }}>
                (税込327,800円)
                </span>
            </div>
        ),
        bold: true,
      },
      {
        text: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: 60}}>
            <span style={{ textDecoration: "line-through", color: "#383E86", fontSize: 12 }}>
              ¥ 1,098,000
            </span>
            <span style={{ color: "#D32F2F", fontWeight: 700, fontSize: 22, lineHeight: 1.2 }}>¥ 898,000</span>
            <span style={{ color: "#383E86", fontSize: 9 }}>
              (税込987,800円)
            </span>
          </div>
        ),
        bold: true,
      },
      { text: "¥ 500,000~", color: "#888888", fontSize: 22 },
    ],
  },
  {
    label: "手数料",
    values: [
      { text: "20%", color: "#D32F2F", bold: true },
      { text: "20%", color: "#D32F2F", bold: true },
      { text: "20%", color: "#D32F2F", bold: true },
      { text: "20%", color: "#D32F2F", bold: true },
      { text: "25%", color: "#888888", fontSize: 22 },
    ],
  },
  {
    label: "運営・支援者\nとのやり取り",
    values: [
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#888888" },
    ],
  },
  {
    label: "海外向け広告\n※別途オプション",
    values: [
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#888888" },
    ],
  },
  {
    label: "掲載後の永続販売",
    values: [
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "times", color: "#888888" },
    ],
  },
  {
    label: "海外配送代行",
    values: [
      { icon: "times", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "times", color: "#888888" },
    ],
  },
  {
    label: "プロジェクト\nページ制作",
    values: [
      { icon: "times", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#888888" },
    ],
  },
  {
    label: "画像動画\n撮影・編集",
    values: [
      { icon: "times", color: "#383E86" },
      { icon: "times", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "circle", color: "#383E86" },
      { icon: "times", color: "#888888" },
    ],
  },
];

const renderCell = (cell: Cell) => {
  if ("icon" in cell) {
    return (
      <span
        style={{
          fontSize: 48,
          color: cell.color,
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {cell.icon === "circle" ? "●" : "×"}
      </span>
    );
  } else {
    return (
      <span
        style={{
          color: cell.color || "#383E86",
          fontWeight: cell.bold ? 700 : 500,
          fontSize: cell.fontSize || 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {cell.text}
      </span>
    );
  }
};

const FeeSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div
      id="amount"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        padding: isMobile ? "64px 0" : "120px 0",
        background: "#fff",
      }}
    >
      <TitleColumn title="料金表" subtitle="AMOUNT" />
      <div style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            maxWidth: "90%",
          }}
        >
          {/* 左ラベル列 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              fontWeight: 600,
              minWidth: isMobile ? 120 : 200,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                height: 60,
                width: "100%",
                backgroundColor: "transparent",
              }}
            />{" "}
            {/* 上部余白（プラン名と揃える） */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                fontWeight: 600,
                minWidth: isMobile ? 120 : 200,
                justifyContent: "center",
                alignItems: "center",
                background:
                  "linear-gradient(rgb(60, 185, 160), rgb(22, 78, 141))",
              }}
            >
              {rows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    height: 70,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom:
                      i !== rows.length - 1 ? "1px solid #e0e7ef" : undefined,
                    whiteSpace: "pre-line",
                    width: "100%",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {row.label.split('\n').map((line, index) => (
                    <div key={index} style={{
                      fontSize: line.includes('※') ? (isMobile ? 10 : 10) : isMobile ? 16 : 16,
                      lineHeight: line.includes('※') ? 1 : 1.5,
                    }}>
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", objectFit: "cover", overflowX: "auto"}}>
            {/* ヘッダー行（plan.nameを横に並べる） */}
            <div
              style={{
                display: "flex",
                background: "linear-gradient(to right, rgb(60, 185, 160), rgb(22, 78, 141))",
                minWidth: isMobile ? 800 : 1000,
              }}
            >
              {plans.map((plan, colIdx) => (
                <div
                  key={plan.name}
                  style={{
                    height: 60,
                    width: isMobile ? 160 : 200,
                    color: "#fff",
                    backgroundColor: "transparent",
                    fontWeight: 700,
                    fontSize: isMobile ? 16 : 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight:
                      colIdx !== plans.length - 1 ? "1px solid #fff" : undefined,
                    letterSpacing: 1,
                  }}
                >
                    <span style={{ backgroundColor: plan.backgroundColor, width:"100%", textAlign: "center", fontWeight: 700, fontSize: isMobile ? 10 : 14, position: "relative", zIndex: 1, whiteSpace: "pre-line", lineHeight: 1.2 }}>
                    <span style={{ backgroundColor: plan.backgroundColor, width:"100%", textAlign: "center", fontWeight: 700, fontSize: isMobile ? 16 : 14, position: "relative", zIndex: 1, whiteSpace: "pre-line", lineHeight: 1.2 }}>
                        {plan.name}
                    </span>
                    </span>
                </div>
              ))}
            </div>

            {/* 各行（rowIdxごとに行単位で描画） */}
            <div style={{ display: "flex", minWidth: isMobile ? 800 : 1000, flexDirection: "column", overflowY: "hidden", overflowX: "auto"}}>
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} style={{ display: "flex" }}>
                {plans.map((plan, colIdx) => {
                  const cell = row.values[colIdx];
                  const baseStyle = {
                    height: 70,
                    width: isMobile ? 160 : 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight:
                      colIdx !== plans.length - 1
                        ? "1px solid #e0e7ef"
                        : undefined,
                    borderBottom:
                      rowIdx !== rows.length - 1
                        ? "1px solid #e0e7ef"
                        : undefined,
                    backgroundColor: colIdx === 2 ? "#E6F7FF" : "transparent",
                    textAlign: "center" as const,
                    flexDirection: "column" as const,
                  };
                  return (
                    <div
                      key={colIdx}
                      style={{...baseStyle}}
                    >
                      {renderCell(cell)}
                    </div>
                  );
                })}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => window.location.href = "/pricing"}
          style={{
            background: "linear-gradient(to right, #43CEA2, #185A9D)",
            color: "white",
            border: "none",
            borderRadius: "25px",
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
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
          料金プラン詳細を見る →
        </button>
      </div>
    </div>
  );
};

export default FeeSection;
