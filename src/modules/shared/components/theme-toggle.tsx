"use client";
import React, { useMemo, useCallback, useState } from "react";
import { Switch } from "antd";

export const ThemeToggle: React.FC = () => {
  const isDarkInitial: boolean = useMemo<boolean>(() => {
    const cookiePair = document.cookie.split("; ").find((c) => c.startsWith("THEME="));
    const cookieValue = cookiePair ? cookiePair.split("=")[1] as "dark" | "light" : undefined;
    if (cookieValue) {
      return cookieValue === "dark";
    }
    return document.documentElement.classList.contains("dark");
  }, []);
  const [checked, setChecked] = useState<boolean>(isDarkInitial);
  const setCookie = useCallback((value: "dark" | "light"): void => {
    document.cookie = `THEME=${value}; path=/; max-age=31536000`;
  }, []);

  const applyDomTheme = useCallback((value: "dark" | "light"): void => {
    const root = document.documentElement;
    if (value === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const onChange = useCallback((checked: boolean): void => {
    const next: "dark" | "light" = checked ? "dark" : "light";
    setCookie(next);
    applyDomTheme(next);
    window.dispatchEvent(new CustomEvent<"dark" | "light">("theme-change", { detail: next }));
    setChecked(checked);
  }, [setCookie, applyDomTheme]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">Theme</span>
      <Switch checked={checked} onChange={onChange} checkedChildren="Dark" unCheckedChildren="Light" />
    </div>
  );
};
