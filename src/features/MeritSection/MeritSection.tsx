"use client";

import React, { useState } from "react";
import DecolatedButton from "@/components/Carousel/buttons/DecolatedButton";
import MeritCarouselCard from "@/components/Card/MeritCarouselCard";
import SectionTitle from "@/components/SectionTitle";
import { ResponsiveImage } from "@/components/Image/ResponsiveImage";
import CarouselAtoms from "@/components/Carousel/Carousel.Atoms";
import { ResponsiveProps } from '@/types';
import { meritItems } from '@/data/sectionData';
import styles from "./MeritSection.module.css";

const MeritSection: React.FC<ResponsiveProps> = ({ isMobile }) => {
  const [selectedID, setSelectedID] = useState<string | null>("01");

  const renderMeritCard = (card: typeof meritItems[0]) => (
    <MeritCarouselCard
      number={card.number}
      title={card.title}
      content={card.content}
      fontSize={isMobile === undefined || isMobile === true ? 14 : 18}
      width={isMobile === undefined || isMobile === true ? 280 : 420}
      displayImg={isMobile === undefined || isMobile === true ? true : false}
      img={card.img}
      alt={card.alt}
    />
  );

  const slides = meritItems.map(renderMeritCard);

  return (
    <section id="merit" className={styles.section}>
      <SectionTitle title="海外クラファンのメリット" subtitle="MERIT" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <ResponsiveImage
              src={meritItems.filter((meritCard) => meritCard.number === selectedID)[0].img}
              alt="Merit illustration"
              fill={true}
              skeleton={false}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={styles.carouselContainer}>
            <CarouselAtoms
              slide_min_width={isMobile === undefined || isMobile === true ? 320 : 430}
              items={slides}
              loop
              otherTransparent
              setSelectedID={setSelectedID}
              IDs={meritItems.map((merit) => merit.number)}
              prevButton={
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: isMobile === undefined || isMobile === true ? "-15px" : "-40px",
                  }}
                >
                  <DecolatedButton direction="prev" />
                </div>
              }
              nextButton={
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: isMobile === undefined || isMobile === true ? "-15px" : "10px",
                  }}
                >
                  <DecolatedButton direction="next" />
                </div>
              }
              playOnInit
              displayButton
              selectedDotButtonStyle={{
                backgroundImage:
                  "-webkit-linear-gradient(left, #43CEA2 0%, #185A9D 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeritSection;