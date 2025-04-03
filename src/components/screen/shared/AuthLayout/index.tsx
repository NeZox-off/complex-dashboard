import React, { PropsWithChildren } from "react";
import Image from "next/image";
import {
  Icon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui";
import useAuthStore from "@/src/store/auth";

interface AuthLayoutProps extends PropsWithChildren {
  type: "Login" | "Register";
  title: string;
  description: string;
}

const AuthLayout = ({
  type,
  title,
  description,
  children,
}: AuthLayoutProps) => {
  const { setType } = useAuthStore();
  const handleSwitchType = () => {
    setType(type === "Login" ? "Login" : "Register");
  };
  return (
    <>
      {type !== "Login" ? (
        <>
          <div className="max-w-xl w-full h-full p-16 rounded-xl bg-card flex flex-col justify-center relative">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl mb-1">{title}</h2>
                <p className="text-lg font-medium text-white/40">
                  Access to controls and settings. Log in to continue.
                </p>
              </div>
              {children}
            </div>
            <Tooltip>
              <TooltipTrigger
                asChild
                onClick={() => handleSwitchType}
                className="cursor-pointer"
              >
                <span className="absolute flex justify-center items-center top-1/2 -right-6 transform size-12 -translate-y-1/2 bg-primary p-3 rounded-full">
                  <Icon className="size-6" name="SquarePen" />
                  <span className="absolute h-full w-full animate-ping bg-primary p-3 rounded-full z-[-1]"></span>
                </span>
              </TooltipTrigger>
              <TooltipContent className="border border-solid border-white/10">
                <p className="font-bold text-base">{type}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <div className="max-w-[34.375rem] mb-60">
              <h1 className="text-7xl max-w-[29.188rem] mb-3">
                Nexery - control panel
              </h1>
              <p className="text-2xl text-white/40">
                Manage your project with convenience and efficiency. Sign up to
                get access to powerful administration tools, customization and
                analytics.
              </p>
            </div>
            <Image
              src={"/svg/large-logo.svg"}
              alt="Nexery logo"
              width={260}
              height={162}
            />
          </div>
        </>
      ) : (
        <>
          <div className="max-w-xl w-full h-full p-16 rounded-xl bg-card flex flex-col justify-center relative">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl mb-1">{title}</h2>
                <p className="text-lg font-medium text-white/40">
                  {description}
                </p>
              </div>
              {children}
            </div>
            <Tooltip>
              <TooltipTrigger
                asChild
                onClick={() => handleSwitchType}
                className="cursor-pointer"
              >
                <span className="absolute flex justify-center items-center top-1/2 -right-6 transform size-12 -translate-y-1/2 bg-primary p-3 rounded-full">
                  <Icon className="size-6" name="SquarePen" />
                  <span className="absolute h-full w-full animate-ping bg-primary p-3 rounded-full z-[-1]"></span>
                </span>
              </TooltipTrigger>
              <TooltipContent className="border border-solid border-white/10">
                <p className="font-bold text-base">{type}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <div className="max-w-[34.375rem] mb-60">
              <h1 className="text-7xl max-w-[29.188rem] mb-3">
                Nexery - control panel
              </h1>
              <p className="text-2xl text-white/40">
                Manage your project with convenience and efficiency. Sign up to
                get access to powerful administration tools, customization and
                analytics.
              </p>
            </div>
            <Image
              src={"/svg/large-logo.svg"}
              alt="Nexery logo"
              width={260}
              height={162}
            />
          </div>
        </>
      )}
    </>
  );         

};

export default AuthLayout;
