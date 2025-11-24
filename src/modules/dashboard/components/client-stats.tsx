"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsClient } from "@/modules/dashboard/services/api";
import { StatCard } from "@/modules/shared/components/stat-card";

export const ClientStats: React.FC = () => {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPostsClient });
  const count: number = data?.posts.length ?? 0;
  return <StatCard title="Client Posts" value={count} />;
};

