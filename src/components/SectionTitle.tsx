"use client";

import React, { useEffect, useRef, useState } from "react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 24,
        marginTop: isMobile && title === "私たちにできること" ? 60 : 0,
        textAlign: "center",
        zIndex: 2,
        position: "relative",
      }}
    >
      <p
        style={{
          color: "#383E86",
          fontWeight: 800,
          fontSize: "26px",
          letterSpacing: "2px",
          margin: 0,
        }}
      >
        {title}
      </p>
      <div style={{ marginTop: 4 }}>
        {subtitle.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              background: "linear-gradient(to right, #43cea2, #185a9d)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: 200,
              fontSize: "22px",
              letterSpacing: "1.2px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(-20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              transitionDelay: `${i * 50 + 200}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
