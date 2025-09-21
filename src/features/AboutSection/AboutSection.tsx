"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { ResponsiveImage } from "@/components/Image/ResponsiveImage";
import AboutPopup from "@/components/Popup/AboutPopup";
import useResponsiveQuery from "@/hooks/useResponsiveQuery";
import { aboutItems } from '@/data/sectionData';
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useResponsiveQuery("(max-width: 768px)");

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
        threshold: 0,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        width: "100%",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingBottom: "50px",
      }}
    >
      <ResponsiveImage
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          opacity: 0.8,
        }}
        alt="world image"
        src="BACKGROUND.png"
        fill={true}
      />

      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 800,
          zIndex: 1,
        }}
      >
        <SectionTitle title="私たちにできること" subtitle="ABOUT" />

        <div className={styles.grid}>
          {aboutItems.map((item, i) => (
            <React.Fragment key={i}>
              <button
                onClick={() => handleItemClick(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  WebkitTapHighlightColor: "transparent",
                  cursor: "pointer",
                  userSelect: "none",
                  verticalAlign: "middle",
                  appearance: "none",
                  color: "#fff",
                  backgroundColor: "rgb(56, 62, 134)",
                  height: 50,
                  padding: 4,
                  borderRadius: 8,
                  marginTop: 6,
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0px)" : "translateY(10px)",
                  transition: "opacity 1.5s ease, transform 1.5s ease",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <span
                  className={styles.buttonText}
                  style={{
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </span>
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Navigation Button */}
        <div
          style={{
            marginTop: isMobile ? "120px" : "60px",
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
            paddingBottom: isMobile ? "40px" : "0px",
          }}
        >
          <button
            onClick={() => window.location.href = "/service"}
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
            サービス詳細を見る →
          </button>
        </div>
      </div>

      {selectedItem !== null && (
        <AboutPopup
          isOpen={selectedItem !== null}
          onClose={handleClosePopup}
          title={aboutItems[selectedItem].title}
          description={aboutItems[selectedItem].description}
          imageUrl={aboutItems[selectedItem].image}
        />
      )}
    </section>
  );
};

export default AboutSection;