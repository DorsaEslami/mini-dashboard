import type { Metadata } from "next";
import type { ReactElement } from "react";
import { getUsersServer } from "@/modules/dashboard/services/api";
import { Sidebar } from "@/modules/dashboard/components/sidebar";
import { ClientStats } from "@/modules/dashboard/components/client-stats";
import { StatCard } from "@/modules/shared/components/stat-card";
import { ActivityChart } from "@/modules/dashboard/components/activity-chart";
import { SalesBarChart } from "@/modules/dashboard/components/sales-bar-chart";
import { TrafficDonutChart } from "@/modules/dashboard/components/traffic-donut-chart";
import { TASKS_COUNT } from "@/modules/dashboard/constants/dashboard-constants";

export const metadata: Metadata = {
  title: "Dashboard | Mini Dashboard",
  description: "Overview of data fetched on client and server",
};

export default async function DashboardPage(): Promise<ReactElement> {
  const serverData = await getUsersServer();
  const serverCount: number = serverData.users.length;
  const labels: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values: number[] = [12, 19, 7, 14, 9, 11, 15];
  const salesLabels: string[] = ["Q1", "Q2", "Q3", "Q4"];
  const salesValues: number[] = [12000, 17500, 14200, 21000];
  const trafficSegments: number[] = [45, 20, 25, 10];

  return (
    <div className="min-h-screen grid grid-cols-[16rem_1fr]">
      <Sidebar />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Server Users" value={serverCount} />
          <ClientStats />
          <StatCard title="Tasks" value={TASKS_COUNT} />
          <StatCard title="Revenue" value="$21,000" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ActivityChart labels={labels} values={values} />
          <SalesBarChart labels={salesLabels} values={salesValues} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TrafficDonutChart segments={trafficSegments} />
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4  dark:bg-gray-900 lg:col-span-2">
            <h2 className="text-lg font-semibold ">Server Users</h2>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {serverData.users.map((u) => (
                <li key={u.id} className="p-2 rounded border border-gray-200 dark:border-gray-700">
                  <div className="font-medium text-gray-600 dark:text-gray-700">{u.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-600">{u.email}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
