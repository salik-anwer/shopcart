import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { QueryProvider } from "@/providers/QueryProvider";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight:['100', '400', '700'] });

export const metadata: Metadata = {
  title: "ShopCart",
  description: "Shop your favorites",
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
