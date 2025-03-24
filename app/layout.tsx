import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";

// Define font styles
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Use different font weights
  variable: "--font-poppins", // Create a CSS variable for Tailwind
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
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
      </body>
    </html>
  );
}
