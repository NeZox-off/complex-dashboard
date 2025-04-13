import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icon,
} from "@/src/components/ui";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Failed! Email is required."),
  password: z
    .string()
    .min(8, "Password must contain a minimum of 8 characters."),
  rememberMe: z.boolean(),
});

interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const router = useRouter();
  const handleSwitchHiddenPass = () => {
    setIsHiddenPass((prev) => !prev);
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.email && values.password) {
      router.push("/dashboard");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex flex-col justify-center"
      >
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="px-5 py-3"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="inline-flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <span
                    onClick={() => handleSwitchHiddenPass()}
                    className="p-2 transition-color hover:bg-background rounded-full"
                  >
                    <Icon name="Eye" />
                  </span>
                </div>
                <FormControl>
                  {isHiddenPass ? (
                    <Input
                      type="password"
                      className="px-5 py-3"
                      placeholder="***********"
                      {...field}
                    />
                  ) : (
                    <Input
                      type="text"
                      className="px-5 py-3"
                      placeholder="***********"
                      {...field}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-white/40">Remember me</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="text-center space-y-8">
          <Button className="w-full font-bold">Login</Button>
          <span className="text-primary">Forgot your password?</span>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
