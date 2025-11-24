"use client";
import React from "react";
import { Input, Button, App } from "antd";
import { useForm, Controller, type FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormValues } from "@/modules/login/types/login.type";
import { login } from "@/modules/login/services/auth";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { message } = App.useApp();
  const { handleSubmit, control, formState } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema), defaultValues: { username: "", password: "" } });
  const errors: FieldErrors<LoginFormValues> = formState.errors;
  const onSubmit = (values: LoginFormValues): void => {
    const result = login(values);
    if (result.success) {
      message.success("Login successful");
      localStorage.setItem("AUTH", "true");
      router.push("/dashboard");
      return;
    }
    message.error(result.message ?? "Login failed");
  };
  return (
    <div className="w-full max-w-sm mx-auto p-6 rounded-lg border border-gray-200 dark:border-gray-700  dark:bg-gray-900">
      <div className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400">Hint: Use <strong>admin</strong> for both username and password</div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller name="username" control={control} render={({ field }) => (
          <div>
            <Input {...field} placeholder="Username" size="large" status={errors.username ? "error" : undefined} aria-invalid={errors.username ? "true" : "false"} />
            {errors.username && (<p className="mt-1 text-xs text-red-600">{errors.username.message as string}</p>)}
          </div>
        )} />
        <Controller name="password" control={control} render={({ field }) => (
          <div>
            <Input.Password {...field} placeholder="Password" size="large" status={errors.password ? "error" : undefined} aria-invalid={errors.password ? "true" : "false"} />
            {errors.password && (<p className="mt-1 text-xs text-red-600">{errors.password.message as string}</p>)}
          </div>
        )} />
        <Button type="primary" htmlType="submit" className="w-full" size="large">Login</Button>
      </form>
    </div>
  );
};
