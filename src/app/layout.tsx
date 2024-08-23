import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Carla Paloma - Contemporary Ceramics Artist",
  description: "Explore the unique ceramic art of Carla Paloma, featuring contemporary designs, intricate textures, and bold colors.",
  openGraph: {
    title: "Carla Paloma - Contemporary Ceramics Artist",
    description: "Explore the unique ceramic art of Carla Paloma, featuring contemporary designs, intricate textures, and bold colors.",
    url: "https://your-portfolio-url.com", // Replace with your actual portfolio URL
    siteName: "Carla Paloma Ceramics",
    images: [
      {
        url: "/profile.jpg", // Ensure this image is in your public folder
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
      <body className="font-mono">{children}</body>
    </html>
  );
}
