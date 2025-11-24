export interface LoginRequest {
  readonly username: string;
  readonly password: string;
}

export interface LoginResponse {
  readonly success: boolean;
  readonly message?: string;
}

import { ADMIN_CREDENTIAL } from "@/modules/login/constants/auth-constants";

export const login = ({ username, password }: Readonly<LoginRequest>): LoginResponse => {
  const isValid: boolean = username === ADMIN_CREDENTIAL && password === ADMIN_CREDENTIAL;
  if (isValid) {
    return { success: true };
  }
  return { success: false, message: "Invalid credentials. Use admin/admin for test" };
};

