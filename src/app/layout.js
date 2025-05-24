import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import ModernBackground from "../components/ModernBackground";
import ClientLayout from "../components/ClientLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "Aditi Rajawat",
    default: "Aditi Rajawat - Frontend Developer",
  },
  description:
    "A professional portfolio showcasing my skills and projects as a Frontend Developer",
  icons: {
    icon: "/logoaditi.jpg",
    apple: "/logoaditi.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoaditi.jpg" />
        <link rel="apple-touch-icon" href="/logoaditi.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* SVG Filters for advanced visual effects */}
        <svg className="hidden">
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
          </filter>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feDisplacementMap in="SourceGraphic" scale="10" />
          </filter>
        </svg>

        {/* Modern animated background */}
        <ModernBackground />

        <ClientLayout>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
