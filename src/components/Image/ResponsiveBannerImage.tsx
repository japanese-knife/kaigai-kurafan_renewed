"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ResponsiveBannerImage.module.css";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export const ResponsiveBannerImage = ({ src, alt, priority }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={styles["banner-wrapper"]}
      style={{
        backgroundColor: loaded ? "transparent" : "#eee",
      }}
    >
      {!loaded && (
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
        fill
        priority={priority}
        loading="eager"
        onLoad={() => setLoaded(true)}
        style={{
          objectFit: "cover",
          opacity: 1,
          transition: "none",
        }}
      />
    </div>
  );
};
