"use client";

export const dynamic = 'force-dynamic';

import React, { Suspense } from "react";
import useResponsiveQuery from "@/hooks/useResponsiveQuery";
import { useSupabasePageData } from "@/hooks/useSupabaseData";
import PageLayout from "@/components/Layout/PageLayout";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import NewsSection from "@/features/NewsSection/NewsSection";
import AboutSection from "@/features/AboutSection/AboutSection";
import WhatCFSection from "@/features/WhatCFSection";
import MeritSection from "@/features/MeritSection/MeritSection";
import ServiceSection from "@/features/ServiceSection/ServiceSection";
import FlowSection from "@/features/FlowSection/FlowSection";
import FeeSection from "@/features/FeeSection";
import WorkSection from "@/features/WorkSection";
import ContactSection from "@/features/ContactSection";
import ContactBannerSection from "@/features/ContactBannerSection";

export default function HomeClient() {
  const isMobile = useResponsiveQuery("(max-width: 768px)");
  const isIpad = useResponsiveQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  
  const { crofuns, news, loading } = useSupabasePageData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLayout isMobile={isMobile} isIpad={isIpad}>
        <HeroSection isMobile={isMobile} />

        <ProjectsSection projects={crofuns} isMobile={isMobile} />

        <NewsSection news={news} isMobile={!!isMobile} isLoading={loading} />

        <AboutSection />

        <WhatCFSection isMobile={isMobile} />

        <MeritSection isMobile={isMobile} />

        <ServiceSection isMobile={isMobile} isIpad={isIpad} />

        <FlowSection />

        <ContactBannerSection />

        <FeeSection isMobile={isMobile || false} />

        <WorkSection isMobile={isMobile || false} />

        <ContactSection />

      </PageLayout>
    </Suspense>
  );
} 