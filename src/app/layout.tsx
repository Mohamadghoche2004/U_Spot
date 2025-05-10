import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USpot",
  description:
    "USpot - Professional agency specializing in website development and design services",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.variable} antialiased`}>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
