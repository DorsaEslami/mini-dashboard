"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { ThemeToggle } from "@/modules/shared/components/theme-toggle";
import { cn } from "@/modules/shared/utils/cn";
import { HomeOutlined, BarChartOutlined, SettingOutlined } from "@ant-design/icons";

export const Sidebar: React.FC = () => {

  return (
    <Layout.Sider width={256} style={{ background: "var(--color-primary-bg)" }} className={cn("h-full border-r border-gray-200 dark:border-gray-700")}>
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
      </div>
      <Menu
        mode="inline"
        style={{ background: "transparent" }}
        items={[
          { key: "overview", icon: <HomeOutlined />, label: "Overview" },
          { key: "analytics", icon: <BarChartOutlined />, label: "Analytics" },
          { key: "settings", icon: <SettingOutlined />, label: "Settings" },
        ]}
      />
    </Layout.Sider>
  );
};
