import React, { useState } from "react";
import {
    Button,
    Checkbox,
    Icon,
    Input,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/src/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";


const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email("Failed! Email is required."),
    password: z
      .string()
      .min(8, "Password must contain a minimum of 8 characters."),
    confirmPassword: z
      .string()
      .min(8, "Password must contain a minimum of 8 characters."),
    agreeWithTermsAndPrivacy: z.boolean(),
    rememberMe: z.boolean(),
  });

interface RegisterFormProps {}

const RegisterForm = ({}: RegisterFormProps) => {
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const [isHiddenConfPass, setIsHiddenConfPass] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeWithTermsAndPrivacy: false,
      rememberMe: false,
    },
  });
  const router = useRouter();

  const handleSwitchHiddenPass = () => {
    setIsHiddenPass((prev) => !prev);
  };
  const handleSwitchHiddenConfPass = () => {
    setIsHiddenConfPass((prev) => !prev);
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
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      className="px-5 py-3"
                      placeholder="Example"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      className="px-5 py-3"
                      placeholder="Example"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
                <FormLabel className="inline-flex items-center justify-between">
                  Password
                  <span
                    onClick={() => handleSwitchHiddenPass()}
                    className="p-2 transition-color hover:bg-background rounded-full"
                  >
                    <Icon name="Eye" />
                  </span>
                </FormLabel>
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="inline-flex items-center justify-between">
                  Confirm password
                  <span
                    onClick={() => handleSwitchHiddenConfPass()}
                    className="p-2 transition-color hover:bg-background rounded-full"
                  >
                    <Icon name="Eye" />
                  </span>
                </FormLabel>
                <FormControl>
                  {isHiddenConfPass ? (
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
            name="agreeWithTermsAndPrivacy"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-white/40">
                  I agree to all the
                  <Link className="text-primary" href={"/"}>
                    Terms
                  </Link>
                  and
                  <Link className="text-primary" href={"/"}>
                    Privacy Policies
                  </Link>
                </FormLabel>
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
          <Button className="w-full font-bold">Sign in</Button>
          <span className="text-primary">Forgot your password?</span>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
