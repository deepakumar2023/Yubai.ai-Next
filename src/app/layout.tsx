import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Header  from "./component/Header";
import Footer from "./component/Footer"
import ScrollToTop from "@/app/component/ScrollToTop"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yubai.ai",
  description:"Experience the convenience of having Dubai’s best online stores at your fingertips, with seamless door-to-door delivery across Lebanon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
  <body className="antialiased">
    <Header />
    {children}
    <Footer />
    <ScrollToTop/>
  </body>
</html>

  );
}
