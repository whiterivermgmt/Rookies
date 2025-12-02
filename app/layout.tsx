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
    template: "%s - Fun! 90.1 WBED",
    default: "Fun! 90.1 WBED",
},
description: "Gerkin Construction expert roofing, gutters, siding & repairs for homes and businesses. Reliable, quality service you can trust."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
        <LiveRadio />
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
