import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Weather App",
  description: "Generated by create next app",
};

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
