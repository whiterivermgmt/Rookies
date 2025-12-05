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
    template: "%s - Johnny Junctions",
    default: "Johnny Junctions",
},
description: "The Primitive Porch – Bedford, IN. Amish furniture, rustic & farmhouse decor, gifts, handmade items, and a Christian bookstore."
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
