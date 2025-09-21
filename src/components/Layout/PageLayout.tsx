import React from 'react';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import { ResponsiveProps } from '@/types';

interface PageLayoutProps extends ResponsiveProps {
  children: React.ReactNode;
  headerSize?: number;
}

// 共通のページレイアウトコンポーネント
const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  isMobile, 
  isIpad, 
  headerSize = 58 
}) => {
  return (
    <>
      <Header isMobile={isMobile} isIpad={isIpad || false} headerSize={headerSize} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F5FBFE",
          position: "relative",
          top: 60,
          width: "100vw",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {children}
      </main>
      <Footer isMobile={isMobile || false} />
    </>
  );
};

export default PageLayout;