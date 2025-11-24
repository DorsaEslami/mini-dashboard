"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface ITrafficDonutChartProps {
  readonly segments: number[];
}

export const TrafficDonutChart: React.FC<Readonly<ITrafficDonutChartProps>> = ({ segments }) => {
  const data = {
    labels: ["Direct", "Referral", "Organic", "Social"],
    datasets: [
      {
        label: "Traffic",
        data: segments,
        backgroundColor: ["#1677ff", "#52c41a", "#faad14", "#eb2f96"],
      },
    ],
  };
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4  dark:bg-gray-900">
      <Doughnut data={data} />
    </div>
  );
};
