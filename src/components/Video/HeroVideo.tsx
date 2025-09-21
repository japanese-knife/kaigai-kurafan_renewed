"use client";

import React, { useRef, useEffect } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  src,
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 再生速度を調整（必要に応じて）
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <video
        ref={videoRef}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        お使いのブラウザは動画の再生に対応していません。
      </video>
    </div>
  );
};

export default HeroVideo;