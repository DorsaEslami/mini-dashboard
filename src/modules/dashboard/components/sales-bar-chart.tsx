"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export interface ISalesBarChartProps {
  readonly labels: string[];
  readonly values: number[];
}

export const SalesBarChart: React.FC<Readonly<ISalesBarChartProps>> = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        backgroundColor: "rgba(22,119,255,0.4)",
        borderColor: "#1677ff",
      },
    ],
  };
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 dark:bg-gray-900">
      <Bar data={data} />
    </div>
  );
};
