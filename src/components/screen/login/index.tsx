"use client";
import React from "react";
import Image from "next/image";
import {
  Icon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../ui";
import useAuthStore from "@/src/store/auth";
import LoginForm from "./ui/LoginForm";

interface LoginProps {}

const Login = ({}: LoginProps) => {
  const { type, setType } = useAuthStore();
  const toggleType = () => {
    setType(type === "login" ? "register" : "login");
  };

  return (
    <>
      <div>
        <div className="max-w-[34.375rem] mb-60">
          <h1 className="text-7xl max-w-[29.188rem] mb-3">Nexery - control panel</h1>
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
          <LoginForm/>
        </div>
        <Tooltip>
          <TooltipTrigger
            asChild
            onClick={toggleType}
            className="cursor-pointer"
          >
            <span className="absolute flex justify-center items-center top-1/2 -left-6 transform size-12 -translate-y-1/2 bg-primary p-3 rounded-full">
              <Icon className="size-6" name="SquarePen" />
              <span className="absolute h-full w-full animate-ping bg-primary p-3 rounded-full z-[-1]"></span>
            </span>
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
