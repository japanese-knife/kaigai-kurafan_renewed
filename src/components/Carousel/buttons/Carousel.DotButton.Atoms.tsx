import React, { PropsWithChildren } from "react";
import "../style/BannerCarousel.css";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const BannerCarouselDotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
