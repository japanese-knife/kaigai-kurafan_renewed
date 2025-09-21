import React from 'react';
import CrowdfundingCardCarousel from "@/components/Carousel/CrowdfundingCardCarousel";
import { CrowdfundingProject, ResponsiveProps } from '@/types';
import { transformCrofunsToCards } from '@/utils/dataTransformers';

interface ProjectsSectionProps extends ResponsiveProps {
  projects: CrowdfundingProject[];
}

// プロジェクトセクションコンポーネント
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects, 
  isMobile 
}) => {
  const cards = transformCrofunsToCards(projects);

  return (
    <CrowdfundingCardCarousel
      cards={cards}
      cardWidth={isMobile ? 280 : 360}
      cardHeight={isMobile ? 310 : 390}
      slideMinWidth={isMobile ? 290 : 370}
      cardFontSize={isMobile ? 14 : 18}
    />
  );
};

export default ProjectsSection;