// 共通の型定義
export interface CrowdfundingProject {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  isOpen: boolean;
  isEnded: boolean;
  progressPercentage: number;
  thumbnailUrl: string;
  logoUrl: string;
  companyName: string;
  isVisible: boolean;
}

export interface NewsItem {
  newsId: string;
  title: string;
  description: string;
  startDate: string;
  category: string;
  author: string;
  image: string;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SupabaseNews {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  start_date: string;
  is_visible: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ResponsiveProps {
  isMobile?: boolean;
  isIpad?: boolean;
}

export interface ServiceItem {
  title: string;
  img: string;
  alt: string;
  subTitle: string;
  description: string;
}

export interface MeritItem {
  number: string;
  img: string;
  alt: string;
  title: string;
  content: string;
}

export interface FlowStep {
  title: string;
  subTitle: string;
  description: string;
}

export interface AboutItem {
  title: string;
  description: string;
  image: string;
}