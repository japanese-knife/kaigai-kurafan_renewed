import { useState, useEffect } from 'react'
import { projectsApi, columnsApi, newsApi, Project, Column, News } from '@/lib/supabase'

// プロジェクトデータ管理フック
export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await projectsApi.getAll()
      setProjects(data)
    } catch (err) {
      console.error('Failed to fetch projects:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects
  }
}

// コラムデータ管理フック
export const useColumns = () => {
  const [columns, setColumns] = useState<Column[]>([])
  const [featuredColumn, setFeaturedColumn] = useState<Column | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchColumns = async () => {
    try {
      setLoading(true)
      setError(null)
      const [allColumns, featured] = await Promise.all([
        columnsApi.getAll(),
        columnsApi.getFeatured()
      ])
      setColumns(allColumns)
      setFeaturedColumn(featured)
      
      // カテゴリを動的に抽出
      const uniqueCategories = Array.from(new Set(allColumns.map(col => col.category)))
      setCategories(['すべて', ...uniqueCategories.sort()])
    } catch (err) {
      console.error('Failed to fetch columns:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch columns')
    } finally {
      setLoading(false)
    }
  }

  const getColumnsByCategory = async (category: string) => {
    try {
      if (category === 'すべて') {
        return columns
      }
      const data = await columnsApi.getByCategory(category)
      return data
    } catch (err) {
      console.error('Failed to fetch columns by category:', err)
      return []
    }
  }

  useEffect(() => {
    fetchColumns()
  }, [])

  return {
    columns,
    featuredColumn,
    categories,
    loading,
    error,
    refetch: fetchColumns,
    getColumnsByCategory
  }
}

// お知らせデータ管理フック
export const useNews = () => {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await newsApi.getLatest(10) // 最新10件を取得
      setNews(data)
    } catch (err) {
      console.error('Failed to fetch news:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch news')
    } finally {
      setLoading(false)
    }
  }

  const getNewsByCategory = async (category: string) => {
    try {
      if (category === 'すべて') {
        return news
      }
      const data = await newsApi.getByCategory(category)
      return data
    } catch (err) {
      console.error('Failed to fetch news by category:', err)
      return []
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return {
    news,
    loading,
    error,
    refetch: fetchNews,
    getNewsByCategory
  }
}

// 統合データ管理フック（既存のusePageDataの代替）
export const useSupabasePageData = () => {
  const { projects, loading: projectsLoading, error: projectsError, refetch: refetchProjects } = useProjects()
  const { columns, featuredColumn, categories, loading: columnsLoading, error: columnsError, refetch: refetchColumns } = useColumns()
  const { news, loading: newsLoading, error: newsError, refetch: refetchNews } = useNews()

  // プロジェクトデータを既存の型に変換
  const transformedProjects = projects.map(project => ({
    title: project.title,
    description: project.description,
    location: project.location,
    startDate: project.start_date,
    endDate: project.end_date,
    isOpen: project.is_open,
    isEnded: project.is_ended,
    progressPercentage: project.progress_percentage,
    thumbnailUrl: project.thumbnail_url,
    logoUrl: project.logo_url || '',
    companyName: project.company_name,
    isVisible: project.is_visible
  }))

  // デバッグ用ログ（開発時のみ）
  useEffect(() => {
    if (projects.length > 0) {
      console.log('Projects from Supabase:', projects.map(p => ({ 
        title: p.title, 
        company_name: p.company_name 
      })));
      console.log('Transformed projects:', transformedProjects.map(p => ({ 
        title: p.title, 
        companyName: p.companyName 
      })));
    }
  }, [projects, transformedProjects]);

  // ニュースデータ（Supabaseから取得）
  const newsData = news.map(newsItem => ({
    newsId: newsItem.id,
    title: newsItem.title,
    description: newsItem.description,
    startDate: newsItem.start_date,
    category: newsItem.category,
    author: newsItem.author,
    image: '', // お知らせには画像がないため空文字
    isVisible: newsItem.is_visible,
    createdAt: newsItem.created_at,
    updatedAt: newsItem.updated_at
  }))

  return {
    crofuns: transformedProjects,
    news: newsData,
    columns,
    featuredColumn,
    categories,
    loading: projectsLoading || columnsLoading || newsLoading,
    error: projectsError || columnsError || newsError,
    refetch: () => {
      refetchProjects()
      refetchColumns()
      refetchNews()
    }
  }
}