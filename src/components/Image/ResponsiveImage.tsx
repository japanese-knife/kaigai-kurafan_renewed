"use client";

import Image from "next/image";
import { useState, CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean; // fillを使う場合
  aspectRatio?: string; // 例: "16 / 9"
  objectFit?: CSSProperties["objectFit"];
  priority?: boolean;
  skeleton?: boolean; // スケルトン表示を有効にするか
  style?: React.CSSProperties; // 追加スタイル
  className?: string;
  onClick?: () => void;
};

export const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  aspectRatio,
  objectFit = "cover",
  priority,
  skeleton = true,
  style,
  className,
  onClick,
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: fill ? "100%" : width,
        height: fill ? "auto" : height,
        aspectRatio: aspectRatio,
        overflow: "hidden",
        backgroundColor: skeleton && !loaded ? "#eee" : "transparent",
        ...style,
      }}
      className={className}
      onClick={onClick}
    >
      {skeleton && !loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#e0e0e0",
            zIndex: 1,
          }}
        />
      )}

      <Image
        src={`/images/${src}`}
        alt={alt}
        unoptimized
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        onLoad={() => setLoaded(true)}
        style={{
          objectFit,
          opacity: 1,
          transition: "none",
        }}
      />
    </div>
  );
};
