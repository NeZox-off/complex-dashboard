"use client"
import React from "react";
import { Icon, Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { useToggleAuthorizationStore } from "@/features/user-auth/model/store";
import { WelcomeBanner } from "./WelcomeBanner";
import { cn } from "@/shared/lib";
import { LoginForm } from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthorizationProps {}

const Authorization = ({}: AuthorizationProps) => {
  const { setType, type } = useToggleAuthorizationStore();
  const handleSwitchType = () => {
    setType(type === "Login" ? "Register" : "Login");
  };
  const authOptions = {
    Login: "Access to tools and settings for effective management.",
    Register:
      "Manage your project with convenience and efficiency. Sign up to get access to powerful administration tools, customization and analytics.",
  };

  return (
    <>
      <WelcomeBanner
        className={cn(
          type === "Login"
            ? "items-start text-left order-0 "
            : "items-end text-right order-2"
        )}
        description={authOptions[type]}
      />
      <div className="flex-1 h-full p-16 bg-card flex flex-col items-center justify-center relative">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-1">
              {type === "Login" ? "Login" : "Sign in"}
            </h2>
            <p className="text-lg font-medium text-white/40">
              {type === "Login"
                ? "Welcome back!"
                : "Access to controls and settings. Log in to continue."}
            </p>
          </div>
          {type === "Login" ? <LoginForm /> : <RegisterForm />}
        </div>
        <Tooltip>
          <TooltipTrigger
            asChild
            onClick={() => handleSwitchType()}
            className="cursor-pointer"
          >
            <span className={cn("absolute flex justify-center items-center top-1/2 transform size-12 -translate-y-1/2 bg-primary p-3 rounded-full", type === "Login" ? "-left-6": "-right-6")}>
              <Icon className="size-6" name="SquarePen" />
              <span className="absolute h-full w-full animate-ping bg-primary p-3 rounded-full z-[-1]"></span>
            </span>
          </TooltipTrigger>
          <TooltipContent className="border border-solid border-white/10">
            <p className="font-bold text-base">{type && "Sign in"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
};

export { Authorization };
