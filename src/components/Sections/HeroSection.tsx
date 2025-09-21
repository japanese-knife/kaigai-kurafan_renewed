import React from 'react';
import TopBannerCarousel from "@/components/Carousel/TopBannerCarousel";
// バナー画像の定義
const bannerImages = [
  "BANNER1-NEW.webp",
  "BANNER2-NEW.webp", 
  "BANNER3-NEW.webp",
];

interface HeroSectionProps {
  isMobile?: boolean;
}

// ヒーローセクションコンポーネント
const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => {
  return (
    <TopBannerCarousel
      isBanner={isMobile === undefined ? true : !!isMobile}
      banner_img_src={bannerImages}
      slide_min_width={804}
    />
  );
};

export default HeroSection;