import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "海外クラファン代行 | 高コスパな海外進出支援 | RE-IDEA",
    short_name: "RE-IDEA",
    description: "海外クラウドファンディングの活用で海外進出をハードル低く実現。海外挑戦の最初の一歩を高コスパで全力サポートいたします。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/kaigai-kurafan.png",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon"
      },
      {
        src: "/kaigai-kurafan.png",
        type: "image/x-icon",
        sizes: "192x192"
      },
      {
        src: "/kaigai-kurafan.png",
        type: "image/x-icon",
        sizes: "512x512"
      }
    ],
    orientation: "portrait",
    scope: "/",
    lang: "ja",
    dir: "ltr",
    prefer_related_applications: false
  }
} 