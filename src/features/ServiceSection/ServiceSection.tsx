"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "@/components/Card/ServiceCard";
import { ResponsiveImage } from "@/components/Image/ResponsiveImage";
import SectionTitle from "@/components/SectionTitle";
import { ResponsiveProps } from '@/types';
import { serviceItems } from '@/data/sectionData';

const ServiceSection: React.FC<ResponsiveProps> = ({ isMobile, isIpad }) => {
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getSubTitle = (subTitle: string) => {
    return isMobile ? subTitle.replace(/\n/g, '\n') : subTitle.replace(/\n/g, '');
  };

  const imgWidth = isMobile ? "0%" : "80%";

  return (
    <section
      id="service"
      ref={sectionRef}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "680px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isMobile !== undefined && (
        <>
          <ResponsiveImage
            src="BACKGROUND.png"
            alt="background"
            fill={true}
            style={{
              position: "absolute",
              zIndex: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
              objectFit: "cover",
              color: "white",
            }}
          />

          <SectionTitle title="私たちの強み" subtitle="SERVICE" />

          <div
            style={{
              marginTop: "32px",
              width: isMobile ? "85%" : isIpad ? "90%" : "80%",
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: isMobile ? "16px" : "18px",
              zIndex: 2,
            }}
          >
            {serviceItems.map((value, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0px)" : "translateY(30px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <ServiceCard
                  alt={value.alt}
                  display_img={!isMobile}
                  img_ratio={imgWidth}
                  image={value.img}
                  title={value.title}
                  subTitle={getSubTitle(value.subTitle)}
                  description={value.description}
                  titleFontSize={isMobile ? 16 : 20}
                  contentFontSize={isMobile ? 14 : 16}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ServiceSection;