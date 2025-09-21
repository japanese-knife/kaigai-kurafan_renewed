import React, { useEffect, useRef } from "react";
import { ResponsiveBannerImage } from "../Image/ResponsiveBannerImage";
import { ProjectBanner } from "../Banner/ProjectBanner";
import HeroVideo from "../Video/HeroVideo";
import CarouselAtoms from "./Carousel.Atoms";

interface ButtonProps {
  isBanner?: boolean;
  banner_img_src: string[];
  slide_min_width: number;
}

const TopBannerCarousel: React.FC<ButtonProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <CarouselAtoms
      isBanner={props.isBanner || false}
      slide_min_width={props.slide_min_width}
      items={[
        <HeroVideo 
          key="hero-video"
          src="/videos/hero-video1.mp4"
          poster="/images/introduction.jpg"
          autoPlay={true}
          muted={true}
          loop={true}
        />,
        <ProjectBanner key="project-banner" />,
        ...(props.banner_img_src || []).map((src: string) => (
          <ResponsiveBannerImage
            key={src}
            src={src}
            alt="top-banner-reidea-src"
            priority
          />
        )),
      ]}
    />
  );
};

export default TopBannerCarousel;
