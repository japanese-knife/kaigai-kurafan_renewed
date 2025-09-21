import { CrowdfundingProject } from '@/types';

// データ変換ユーティリティ
export const transformCrofunsToCards = (crofuns: CrowdfundingProject[]) => {
  return crofuns.map((crofun) => ({
    title: crofun.title,
    description: crofun.description,
    location: crofun.location,
    startDate: crofun.startDate,
    endDate: crofun.endDate,
    isOpen: crofun.isOpen,
    isEnded: crofun.isEnded,
    progressPercentage: crofun.progressPercentage,
    thumbnailUrl: crofun.thumbnailUrl,
    logoUrl: crofun.logoUrl,
    companyName: crofun.companyName,
    isVisible: crofun.isVisible,
  }));
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateProgress = (current: number, goal: number): number => {
  return Math.round((current / goal) * 100);
};

export const isProjectActive = (startDate: string, endDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start <= now && now <= end;
};