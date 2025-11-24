import * as yup from "yup";

export interface LoginFormValues {
  readonly username: string;
  readonly password: string;
}

export const loginSchema: yup.ObjectSchema<LoginFormValues> = yup.object({
  username: yup.string().trim().required("Username is required").min(3, "Minimum 3 characters"),
  password: yup.string().trim().required("Password is required").min(3, "Minimum 3 characters"),
});

