import React from "react";
import "./DecolatedButton.css";

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick?: () => void;
}

const DecolatedButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <button
      className={`carousel-button carousel-button--${direction}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
    >
      {direction === "prev" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ transform: "scale(0.95)" }}
        >
          <path d="M15 5l-9 7 9 7z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ transform: "scale(0.95)" }}
        >
          <path d="M9 5l9 7-9 7z" />
        </svg>
      )}
    </button>
  );
};

export default DecolatedButton;
