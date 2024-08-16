import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { Viewport } from 'next'
import Navbar from "@/components/Navbar";
import { QueryProvider } from "@/providers/QueryProvider";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:['100', '400', '700'] });

export const metadata: Metadata = {
  title: "ShopCart",
  description: "Shop your favorites",
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar/>
            <main className="flex-grow">
              {children}
            </main>
            <Footer/>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
