import type { Metadata } from "next";
import "./globals.css";
import "antd/dist/reset.css";
import { cookies } from "next/headers";
import type { ReactElement } from "react";
import { ClientProviders } from "@/modules/shared/providers/client-providers";
import { aradFont } from "./fonts";



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
      <body className={`${aradFont.variable} antialiased`}>
        <ClientProviders isDarkInitial={isDark}>{children}</ClientProviders>
      </body>
    </html>
  );
}
