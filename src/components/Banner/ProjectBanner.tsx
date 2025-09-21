import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectImageUrl } from '@/lib/supabase';
import { useSupabasePageData } from '@/hooks/useSupabaseData';

export const ProjectBanner: React.FC = () => {
  const { crofuns } = useSupabasePageData();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // 3秒ごとにプロジェクトを切り替え
  useEffect(() => {
    if (crofuns.length === 0) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => 
        (prevIndex + 1) % crofuns.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [crofuns.length]);

  if (crofuns.length === 0) {
    return (
      <div style={{
        width: '100%',
        aspectRatio: '5/4',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        プロジェクトを読み込み中...
      </div>
    );
  }

  const currentProject = crofuns[currentProjectIndex];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      overflow: 'hidden',
      backgroundColor: '#000'
    }}>
      {/* 背景画像 */}
      <Image
        src={getProjectImageUrl(currentProject.thumbnailUrl)}
        alt={currentProject.title}
        fill
        unoptimized
        style={{
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* オーバーレイ */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(56, 62, 134, 0.9) 0%, rgba(67, 206, 162, 0.8) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px'
        }}>
          {/* ステータスバッジ */}
          <div style={{
            display: 'inline-block',
            backgroundColor: currentProject.isOpen && !currentProject.isEnded ? 'rgba(67, 206, 162, 0.9)' : 'rgba(56, 62, 134, 0.9)',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
          }}>
            {currentProject.isOpen && !currentProject.isEnded ? '公開中' : '準備中'}
          </div>

          {/* プロジェクトタイトル */}
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 48px)',
            fontWeight: '700',
            marginBottom: '16px',
            marginTop: '24px',
            lineHeight: '1.2',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
          }}>
            {currentProject.title}
          </h2>

          {/* 会社名と場所 */}
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 24px)',
            marginBottom: '24px',
            opacity: '0.9',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
            fontWeight: '500'
          }}>
            {currentProject.companyName} | {currentProject.location}
          </p>

          {/* 達成率 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '32px',
            marginTop: window.innerWidth <= 768 ? '16px' : '0px'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '12px 24px',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{
                fontSize: 'clamp(20px, 3vw, 36px)',
                fontWeight: '700',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
              }}>
                {Math.floor(currentProject.progressPercentage)}% 達成
              </span>
            </div>
          </div>

          {/* プログレスバー */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto 24px auto',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '8px'
          }}>
            <div style={{
              width: `${Math.min(currentProject.progressPercentage, 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #43CEA2 0%, #185A9D 100%)',
              borderRadius: '10px',
              transition: 'width 0.5s ease-in-out'
            }} />
          </div>

          {/* インジケーター */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '20px'
          }}>
            {crofuns.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === currentProjectIndex ? 'white' : 'rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};