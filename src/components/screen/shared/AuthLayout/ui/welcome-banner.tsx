import Image from "next/image";
import React from "react";

interface WelcomeBannerProps {
  title?: string;
  description: string;
}

const WelcomeBanner = ({ title = "Nexery - control panel", description }: WelcomeBannerProps) => {
  return (
    <div>
      <div className="max-w-[34.375rem] mb-60">
        <h1 className="text-7xl max-w-[29.188rem] mb-3">
          {title}
        </h1>
        <p className="text-2xl text-white/40">
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
