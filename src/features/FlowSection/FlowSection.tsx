"use client";

import React, { useRef, useState, useEffect } from "react";
import FlowCard from "@/components/Card/FlowCard";
import SectionTitle from "@/components/SectionTitle";
import { flowSteps } from '@/data/sectionData';
import styles from "./FlowSection.module.css";

const FlowSection: React.FC = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
      }
    );

    if (stackRef.current) {
      observer.observe(stackRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="flow" className={styles.section}>
      <SectionTitle title="一連の流れ" subtitle="FLOW" />

      <div ref={stackRef} className={styles.container}>
        <div className={styles.grid}>
          {flowSteps.map((value, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(30px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <FlowCard
                title={value.title}
                subTitle={value.subTitle}
                description={value.description}
                titleFontSize={20}
                contentFontSize={16}
                spacing={2}
              />
            </div>
          ))}
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
          onClick={() => window.location.href = "/flow"}
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
          詳細な流れを見る →
        </button>
      </div>
    </section>
  );
};

export default FlowSection;