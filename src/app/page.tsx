import type { ReactElement } from "react";
import { redirect } from "next/navigation";

export default function Home(): ReactElement | null {
  redirect("/login");
  return null;
}
