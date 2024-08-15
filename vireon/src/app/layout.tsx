import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./providers";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vireon Capital",
  description: "Vireon Capital is a distinguished family office with a 38-year legacy based in King of Prussia, Pennsylvania. With $250 million in assets, we specialize in trading across stocks, distressed/sovereign debt and derivatives, leveraging deep expertise to optimize investment outcomes. In addition to our financial market accumen, we excel in acquiring and managing commercial real estate to maximize returns. Committed to growth, we are expanding into investments in dynamic, growing companies, guided by our investment philosophy to cultivate sustainable value and long-term prosperity.",
  icons: {
    icon: '/favicon.ico',
  },
};

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
