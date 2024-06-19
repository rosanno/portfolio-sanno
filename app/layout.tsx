import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Rosanno's",
  description:
    "Explore the portfolio of Your Name showcasing web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark:bg-[#161616] bg-[#F0F0F0] px-2.5 py-4 scroll-smooth",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full max-w-xl mx-auto mt-20">
            <div className="bg-white dark:bg-[#212121] shadow-sm dark:shadow-none border border-gray-300/5 rounded-[11px] pb-2">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
