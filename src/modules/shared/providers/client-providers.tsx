"use client";
import React, { useEffect, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme as antdTheme, App } from "antd";

export interface IClientProvidersProps {
  readonly children: React.ReactNode;
  readonly isDarkInitial?: boolean;
}

export const ClientProviders: React.FC<Readonly<IClientProvidersProps>> = ({ children, isDarkInitial = false }) => {
  const [queryClient] = useState<QueryClient>(() => new QueryClient());
  const [isDark, setIsDark] = useState<boolean>(isDarkInitial);

  useEffect(() => {
    const handler = (e: Event): void => {
      const next = (e as CustomEvent<"dark" | "light">).detail;
      setIsDark(next === "dark");
    };
    window.addEventListener("theme-change", handler as EventListener);
    return () => window.removeEventListener("theme-change", handler as EventListener);
  }, []);

  const algorithm = useMemo(() => (isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm), [isDark]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ algorithm }}>
        <App>{children}</App>
      </ConfigProvider>
    </QueryClientProvider>
  );
};
