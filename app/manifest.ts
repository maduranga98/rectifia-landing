import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rectifia - Fair cases. Consistent outcomes.",
    short_name: "Rectifia",
    description:
      "A workplace misconduct reporting channel employees actually trust, and an investigation workflow that keeps outcomes consistent.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b2c49",
    theme_color: "#0b2c49",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
