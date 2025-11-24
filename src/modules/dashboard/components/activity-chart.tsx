"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export interface IActivityChartProps {
  readonly labels: string[];
  readonly values: number[];
}

export const ActivityChart: React.FC<Readonly<IActivityChartProps>> = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Activity",
        data: values,
        borderColor: "#1677ff",
        backgroundColor: "rgba(22, 119, 255, 0.2)",
      },
    ],
  };
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4  dark:bg-gray-900">
      <Line data={data} />
    </div>
  );
};
