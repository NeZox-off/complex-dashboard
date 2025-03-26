"use client";
import React, { useState } from "react";
import Image from "next/image";
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Failed! Email is required."),
  password: z
    .string()
    .min(8, "Password must contain a minimum of 8 characters."),
  rememberMe: z.boolean(),
});
interface LoginProps {}

const Login = ({}: LoginProps) => {
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleSwitchHiddenPass = () => {
    setIsHiddenPass((prev) => !prev);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div>
        <div className="max-w-[34.375rem] mb-60">
          <h1 className="text-7xl max-w-[29.188rem]">Nexery - control panel</h1>
          <p className="text-2xl text-white/40">
            Access to tools and settings for effective management.
          </p>
        </div>
        <Image
          src={"/svg/large-logo.svg"}
          alt="Nexery logo"
          width={260}
          height={162}
        />
      </div>
      <div className="max-w-xl w-full h-full p-16 rounded-xl bg-card flex flex-col justify-center relative">
        <div>
          <div className="text-center mb-8">
            <h2 className="text-4xl">Log in</h2>
            <p className="text-2xl font-medium text-white/40">Welcome back!</p>
          </div>
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
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-white/40">
                        Remember me
                      </FormLabel>
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
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute flex justify-center items-center top-1/2 -left-6 transform size-12 -translate-y-1/2 bg-primary p-3 rounded-full">
              <Icon className="size-6" name="SquarePen" />
              <span className="absolute h-full w-full animate-ping bg-primary p-3 rounded-full z-[-1]"></span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="border border-solid border-white/10">
            <p className="font-bold text-base">Register</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
};

export default Login;
