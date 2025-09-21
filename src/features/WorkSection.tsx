"use client";

import React, { useEffect, useRef, useState } from "react";
import { CROUD_FUNDINGS_DATA } from "../const/croundFundings";
import YoutubeCard from "../components/Card/YoutubeCard";
import SectionTitle from "@/components/SectionTitle";
import styles from "./WorkSection.module.css";

const WorkSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        threshold: 0,
        rootMargin: "0px 0px -50% 0px", // 中央で発火
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      key: "urushi",
      ...CROUD_FUNDINGS_DATA.urushi,
      alt: "urushi knife",
    },
    {
      key: "chawaka",
      ...CROUD_FUNDINGS_DATA.chawaka,
      alt: "chawaka",
    },
    {
      key: "fujiko",
      ...CROUD_FUNDINGS_DATA.fujiko,
      alt: "fujiko",
    },
    {
      key: "uwasa",
      ...CROUD_FUNDINGS_DATA.uwasa,
      alt: "uwasa",
    },
    {
      key: "ybb",
      ...CROUD_FUNDINGS_DATA.ybb,
      alt: "ybb",
    },
  ];

  return (
    <div
      id="works"
      ref={sectionRef}
      className={styles.container}
      style={{
        paddingTop: isMobile ? 64 : 120,
        paddingBottom: isMobile ? 64 : 120,
      }}
    >
      <SectionTitle title="導入事例" subtitle="WORKS" />

      <div className={styles.content}>
        {items.map((item, index) => (
          <div
            key={item.key}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: `${index * 120}ms`,
            }}
          >
            <YoutubeCard
              fontSize={18}
              isMobile={isMobile}
              videoId={item.videoId}
              imgSrc={item.imgSrc}
              title={item.title}
              plan={item.plan}
              alt={item.alt}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
