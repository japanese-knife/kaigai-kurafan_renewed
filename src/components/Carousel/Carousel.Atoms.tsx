"use client";

import React, { ReactElement } from "react";
import { BannerCarouselDotButton } from "./buttons/Carousel.DotButton.Atoms";
import "./style/EmblaCarousel.css";
import { useCarousel } from "./useCarousel.hooks";

export interface CarouselAtomsProps {
  isTwoRows?: boolean;
  isBanner?: boolean;
  delay?: number;
  displayButton?: boolean;
  items?: React.ReactNode[];
  slide_min_width?: number;
  borderRadius?: number;
  aspectRatio?: string;
  playOnInit?: boolean;
  autoScroll?: boolean; // ← 今は使わない
  IDs?: (string | null)[];
  isSelectedBorder?: boolean;
  setSelectedID?: (value: string | null) => void;
  loop?: boolean;
  otherTransparent?: boolean;
  prevButton?: ReactElement<{ onClick?: () => void }>;
  nextButton?: ReactElement<{ onClick?: () => void }>;
  selectedDotButtonStyle?: React.CSSProperties;
  disableDrag?: boolean;
  disableScroll?: boolean;
}

const CarouselAtoms: React.FC<CarouselAtomsProps> = ({
  isTwoRows,
  isBanner,
  displayButton = true,
  playOnInit,
  items = [],
  slide_min_width,
  delay,
  IDs,
  setSelectedID,
  loop,
  otherTransparent,
  prevButton,
  nextButton,
  selectedDotButtonStyle,
}) => {
  const {
    emblaRef,
    selectedIndex,
    onDotButtonClick,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarousel({
    loop,
    playOnInit,
    delay,
    onSelectedIndexChange: (index: number) => {
      if (setSelectedID && IDs) {
        setSelectedID(IDs[index]);
      }
    },
  });

  const renderWithOnClick = (
    button: ReactElement<{ onClick?: () => void }> | undefined,
    onClick: () => void
  ) => {
    return button && React.isValidElement(button)
      ? React.cloneElement(button, { onClick })
      : null;
  };

  const containerClass = isBanner ? "banner" : "embla";
  const viewportClass = `${containerClass}__viewport`;
  const slideContainerClass = `${containerClass}__container`;
  const slideClass = `${containerClass}__slide`;
  const slideNumberClass = `${containerClass}__slide__number`;

  return (
    <div
      className={containerClass}
      style={
        {
          zIndex: 1,
          position: "relative",
          "--slide-size": isBanner ? "100%" : `${slide_min_width ?? 0}px`,
        } as React.CSSProperties
      }
    >
      <div className={viewportClass} ref={emblaRef}>
        <div className={slideContainerClass}>
          {isTwoRows
            ? Array.from({ length: items.length }, (_, index) =>
                index % 2 === 0 ? (
                  <div key={`row-slide-${index}`} className={slideClass}>
                    {[0, 1].map((row_index) => {
                      const actualIndex = index + row_index;
                      if (actualIndex >= items.length) return null;
                      return (
                        <div
                          key={`row-${actualIndex}`}
                          style={{
                            opacity: otherTransparent
                              ? actualIndex !== selectedIndex
                                ? 0.2
                                : 1
                              : undefined,
                            transition: "opacity 0.2s ease-in-out",
                          }}
                        >
                          <div
                            className={slideNumberClass}
                            style={{ width: "100%" }}
                          >
                            {items[actualIndex]}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null
              )
            : items.map((item, index) => (
                <div
                  className={slideClass}
                  key={`single-${index}`}
                  style={{
                    opacity: otherTransparent
                      ? index !== selectedIndex
                        ? 0.2
                        : 1
                      : undefined,
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <div className={slideNumberClass} style={{ width: "100%" }}>
                    {item}
                  </div>
                </div>
              ))}
        </div>
      </div>

      {displayButton && (
        <div className="banner__controls">
          <div className="banner__dots">
            {items.map((_, index) => (
              <BannerCarouselDotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className="banner__dot"
                aria-label={`Scroll to slide ${index + 1}`}
                style={{
                  backgroundColor:
                    index === selectedIndex ? "#383E86" : "#C2C2C2",
                  ...(index === selectedIndex ? selectedDotButtonStyle : {}),
                }}
              />
            ))}
          </div>
        </div>
      )}

      {renderWithOnClick(prevButton, onPrevButtonClick)}
      {renderWithOnClick(nextButton, onNextButtonClick)}
    </div>
  );
};

export default CarouselAtoms;
