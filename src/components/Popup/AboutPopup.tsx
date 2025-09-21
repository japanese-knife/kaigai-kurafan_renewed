import React from "react";
import Image from "next/image";
import "./AboutPopup.css";
import { ResponsiveImage } from "../Image/ResponsiveImage";

interface AboutPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  role?: string;
  achievements?: string[];
  skills?: string[];
}

const AboutPopup: React.FC<AboutPopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
  role,
  achievements,
  skills,
}) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-button" onClick={onClose}>×</button>
        
        <div className="popup-image-container">
          {imageUrl.startsWith('http') ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              unoptimized
              style={{
                objectFit: "cover"
              }}
            />
          ) : (
            <ResponsiveImage
              src={imageUrl}
              alt={title}
              fill
              aspectRatio="16/9"
            />
          )}
        </div>

        <div className="popup-details">
          <h2 className="popup-title">{title}</h2>
          {role && <p className="popup-role">{role}</p>}
          <p className="popup-description">{description}</p>

          {achievements && achievements.length > 0 && (
            <div className="popup-section">
              <h3 className="section-title">主な実績</h3>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {skills && skills.length > 0 && (
            <div className="popup-section">
              <h3 className="section-title">スキル</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPopup; 