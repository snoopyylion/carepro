import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

// Define font styles
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Care-Pro Academy",
  description: "Care-Pro Academy offers caregiver training and certification.",
  icons: {
    icon: "/img/logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
