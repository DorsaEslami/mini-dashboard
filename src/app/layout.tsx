import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";
import { cookies } from "next/headers";
import type { ReactElement } from "react";
import { ClientProviders } from "@/modules/shared/providers/client-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Dashboard",
  description: "A test dashboard with login, charts, and theming",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<ReactElement> {
  const cookieStore = await cookies();
  const isDark = cookieStore.get("THEME")?.value === "dark";
  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProviders isDarkInitial={isDark}>{children}</ClientProviders>
      </body>
    </html>
  );
}
