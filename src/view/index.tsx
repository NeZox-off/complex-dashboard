"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Checkbox, Icon, Input, Label } from "../components/ui";
import { useForm, SubmitHandle } from "react-hook-form";
interface AuthProps {}

type Inputs = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const Auth = ({}: AuthProps) => {
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const handleSwitchHiddenPass = () => {
    setIsHiddenPass((prev) => !prev);
  };

  const onSubmit: SubmitHandle<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className="py-14 h-dvh">
      <div className="container px-16 mx-auto w-full h-full">
        <div className="flex items-center justify-between h-full">
          <div>
            <div className="max-w-[34.375rem] mb-60">
              <h1 className="text-7xl max-w-[29.188rem]">
                Nexery - control panel
              </h1>
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
          <form
            className="max-w-2xl w-full h-full p-16 rounded-3xl bg-card flex flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-24">
                <div className="text-center mb-8">
                  <h2 className="text-5xl">Log in</h2>
                  <p className="text-2xl font-medium text-white/40">
                    Welcome back!
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <Label htmlFor="email" className="mb-1 text-white/20">Email</Label>
                    <Input
                      id="email"
                      type="text"
                      className="px-5 py-4"
                      defaultValue={"example@gmail.com"}
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label htmlFor="password" className="text-white/20">Password</Label>
                      <span
                        onClick={() => handleSwitchHiddenPass()}
                        className="flex items-center gap-3 text-white/20"
                      >
                        {isHiddenPass ? (
                          <>
                            <Icon name="EyeClosed" />
                            Show
                          </>
                        ) : (
                          <>
                            <Icon name="Eye" />
                            Hide
                          </>
                        )}
                      </span>
                    </div>
                    {isHiddenPass ? (
                      <Input id="password" type="password" className="px-5 py-4" placeholder="example" />
                    ) : (
                      <Input id="password" type="text" className="px-5 py-4" placeholder="example" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-white/40">
                      Remember me
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Button className="w-full font-bold">Login</Button>
                <span className="text-primary">Forgot your password?</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
