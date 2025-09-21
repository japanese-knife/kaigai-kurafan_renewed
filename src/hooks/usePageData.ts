import { useState, useEffect } from 'react';
import { CrowdfundingProject, NewsItem } from '@/types';
import { mockCrowdfundingProjects, mockNews } from '@/data/mockData';

// ページデータ管理のカスタムフック
export const usePageData = () => {
  const [crofuns, setCrofuns] = useState<CrowdfundingProject[]>(mockCrowdfundingProjects);
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [loading, setLoading] = useState(false);

  // 将来的にAPIからデータを取得する場合の準備
  const fetchCrofuns = async () => {
    setLoading(true);
    try {
      // const response = await fetch('/api/crofuns');
      // const data = await response.json();
      // setCrofuns(data);
      setCrofuns(mockCrowdfundingProjects);
    } catch (error) {
      console.error('Failed to fetch crofuns:', error);
      setCrofuns(mockCrowdfundingProjects);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      // const response = await fetch('/api/news');
      // const data = await response.json();
      // setNews(data);
      setNews(mockNews);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      setNews(mockNews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrofuns();
    fetchNews();
  }, []);

  return {
    crofuns,
    news,
    loading,
    refetchCrofuns: fetchCrofuns,
    refetchNews: fetchNews,
  };
};