import { cn } from "@/src/lib/utils";
import Image from "next/image";
import React from "react";

interface WelcomeBannerProps {
  title?: string;
  description: string;
  className?: string;
}

const WelcomeBanner = ({ title = "Nexery - control panel", description, className }: WelcomeBannerProps) => {
  return (
    <div className={cn("p-16 h-full justify-end flex-1 flex flex-col", className)}>
      <div className={cn("max-w-[34.375rem] mb-40 inline-flex flex-col", className)}>
        <h1 className="text-7xl max-w-[29.188rem] mb-3">
          {title}
        </h1>
        <p className="text-xl font-normal text-white/20">
          {description}
        </p>
      </div>
      <Image
        src={"/svg/large-logo.svg"}
        alt="Nexery logo"
        width={260}
        height={162}
      />
    </div>
  );
};

export default WelcomeBanner;
