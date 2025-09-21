import React, { useState } from "react";
import CarouselAtoms from "./Carousel.Atoms";
import CrowdfundingCard from "../Card/CrowdfundingCard";
import CrowdfundingPopup from "../Popup/CrowdfundingPopup";

interface CrowdfundingCardCarouselProps {
  cards: {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    progressPercentage: number;
    thumbnailUrl: string;
    logoUrl?: string;
    iconUrl?: string;
    companyName: string;
    isOpen: boolean;
    isEnded: boolean;
    isVisible?: boolean;
  }[];
  cardWidth: number;
  cardHeight: number;
  cardFontSize: number;
  slideMinWidth?: number;
  onCardClick?: (index: number) => void;
}

const CrowdfundingCardCarousel: React.FC<CrowdfundingCardCarouselProps> = ({
  cards,
  cardWidth,
  cardHeight,
  cardFontSize,
  slideMinWidth = 320, // カードの幅 + 余白
  onCardClick,
}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const visibleCards = cards.filter(card => card.isVisible !== false);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
    onCardClick?.(index);
  };

  const handleClosePopup = () => {
    setSelectedCardIndex(null);
  };

  const selectedCard = selectedCardIndex !== null ? visibleCards[selectedCardIndex] : null;

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingTop: "40px",
          paddingBottom: "10px",
          marginBottom: "50px",
        }}
      >
        <CarouselAtoms
          slide_min_width={slideMinWidth}
          displayButton={false}
          loop={true}
          playOnInit={true}
          items={visibleCards.map((card, index) => (
            <CrowdfundingCard
              key={`${card.title}-${index}`}
              {...card}
              width={cardWidth}
              height={cardHeight}
              onClick={() => handleCardClick(index)}
              cardFontSize={cardFontSize}
            />
          ))}
        />

        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "70%",
            top: "40%",
            zIndex: 0,
            backgroundColor: "#383E86",
          }}
        />
      </div>

      {selectedCard && (
        <CrowdfundingPopup
          isOpen={selectedCardIndex !== null}
          onClose={handleClosePopup}
          title={selectedCard.title}
          description={selectedCard.description}
          location={selectedCard.location}
          startDate={selectedCard.startDate}
          endDate={selectedCard.endDate}
          progressPercentage={selectedCard.progressPercentage}
          thumbnailUrl={selectedCard.thumbnailUrl}
          companyName={selectedCard.companyName}
          isEnded={selectedCard.isEnded}
        />
      )}
    </>
  );
};

export default CrowdfundingCardCarousel;
