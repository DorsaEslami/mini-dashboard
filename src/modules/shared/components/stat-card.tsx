import React from "react";
import { cn } from "@/modules/shared/utils/cn";

export interface IStatCardProps {
  readonly title: string;
  readonly value: string | number;
}

export const StatCard: React.FC<Readonly<IStatCardProps>> = ({ title, value }) => {
  return (
    <div className={cn("rounded-lg border border-gray-200 dark:border-gray-700 p-4 dark:bg-gray-900")}>
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-gray-600 dark:text-gray-700">{value}</div>
    </div>
  );
};
