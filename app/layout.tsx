import type { Metadata } from "next";
import "./globals.css";
import  Header  from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import SocialMediaHeader from "@/components/ui/SocialMediaHeader";
import { Analytics } from '@vercel/analytics/next';
import HeaderBanner from "@/components/ui/HeaderBanner";
import LiveRadio from "@/components/ui/LiveRadio";

export const metadata: Metadata = {
  title: {
    template: "%s - Rookies Entertainment",
    default: "Rookies Entertainment",
  },
  description: "Rookies Bedford – Bedford, IN. Family-friendly entertainment center featuring axe throwing, arcade games, golf & sports simulators, a full-service restaurant and bar, party rooms, and events for all ages."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
        
      <SocialMediaHeader />
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
