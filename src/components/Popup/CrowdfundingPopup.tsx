import React from "react";
import Image from "next/image";
import { getProjectImageUrl } from "@/lib/supabase";
import "./CrowdfundingPopup.css";

interface CrowdfundingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  progressPercentage: number;
  thumbnailUrl: string;
  companyName: string;
  isEnded: boolean;
}

const CrowdfundingPopup: React.FC<CrowdfundingPopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  location,
  startDate,
  endDate,
  progressPercentage,
  thumbnailUrl,
  companyName,
  isEnded,
}) => {
  if (!isOpen) return null;

  const isComingSoon = new Date(startDate) > new Date();
  const isNowOpen = new Date(startDate) <= new Date() && new Date(endDate) >= new Date();

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-button" onClick={onClose}>×</button>
        
        <div className="popup-image-container">
          <Image
            src={getProjectImageUrl(thumbnailUrl)}
            alt={title}
            fill
            unoptimized
            style={{
              objectFit: "cover"
            }}
          />
          {(!isNowOpen || (isNowOpen && !isEnded)) && (
            <div className={`popup-status-label ${!isNowOpen ? 'coming-soon' : 'open'}`}>
              {!isNowOpen ? "準備中" : "公開中"}
            </div>
          )}
        </div>

        <div className="popup-details">
          <h2 className="popup-title">{title}</h2>
          <p className="popup-description">{description}</p>

          <div className="popup-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
            <span className="progress-percentage">{Math.floor(progressPercentage)}%</span>
          </div>

          <div className="popup-info">
            <div className="info-row">
              <span>会社: {companyName}</span>
              <span>所在地: {location}</span>
            </div>
            {isComingSoon && (
              <p className="coming-soon-message">
                このプロジェクトは現在準備中です。
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdfundingPopup; 