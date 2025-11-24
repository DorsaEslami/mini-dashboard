import type { Metadata } from "next";
import type { ReactElement } from "react";
import { LoginForm } from "@/modules/login/components/login-form";
import { ThemeToggle } from "@/modules/shared/components/theme-toggle";

export const metadata: Metadata = {
  title: "Login | Mini Dashboard",
  description: "Login to access the mini dashboard",
};

export default function LoginPage(): ReactElement {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6">
      <div className="mb-6">
        <ThemeToggle />
      </div>
      <LoginForm />
    </div>
  );
}
