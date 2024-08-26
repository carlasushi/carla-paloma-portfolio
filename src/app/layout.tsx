// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParallaxSection from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "Carla Paloma - Contemporary Ceramics Artist",
  description: "Explore the unique ceramic art of Carla Paloma, featuring contemporary designs, intricate textures, and bold colors.",
  openGraph: {
    title: "Carla Paloma - Contemporary Ceramics Artist",
    description: "Explore the unique ceramic art of Carla Paloma, featuring contemporary designs, intricate textures, and bold colors.",
    url: "https://carla-paloma-portfolio.vercel.app/",
    siteName: "Carla Paloma Ceramics",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Carla Paloma Profile Image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono">
        <ParallaxSection>
          <div className="my-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-600">
            {children}
          </div>
        </ParallaxSection>
      </body>
    </html>
  );
}
