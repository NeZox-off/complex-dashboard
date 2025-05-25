import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email("Failed! Email is required."),
  password: z
    .string()
    .min(8, "Password must contain a minimum of 8 characters."),
  rememberMe: z.boolean(),
});

type LoginFormType = z.infer<typeof loginFormSchema>;

const registerFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must contain a minimum of 2 letters!"),
  lastName: z.string().min(2, "Last name must contain a minimum of 2 letters!"),
  email: z.string().email("Failed! Email is required."),
  password: z
    .string()
    .min(8, "Password must contain a minimum of 8 characters."),
  confirmPassword: z
    .string()
    .min(8, "Password must contain a minimum of 8 characters."),
  agreeWithTermsAndPrivacy: z.boolean({
    required_error: "This point is required!",
  }),
  rememberMe: z.boolean(),
});

type RegisterFormType = z.infer<typeof registerFormSchema>;

export {
  loginFormSchema,
  registerFormSchema,
  type RegisterFormType,
  type LoginFormType,
};
