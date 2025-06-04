import React from "react";
import { RoleType, UserType } from "../model";
import { Icon, Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { getFormatTime } from "@/shared/model";

interface AdministrationCardHeaderProps {
  color: RoleType["color"];
  data: UserType;
}

export const AdministrationCardHeader = ({
  data,
  color,
}: AdministrationCardHeaderProps) => {
  return (
    <header className="relative">
      <Tooltip>
        <TooltipTrigger className="z-10 absolute top-2 right-2 bg-background/80 p-1 rounded hover:bg-background transition-colors">
          <Icon name="Copy" size={16} />
        </TooltipTrigger>
        <TooltipContent className="p-1" sideOffset={4}>
          Copy ID
        </TooltipContent>
      </Tooltip>
      <svg
        viewBox="0 0 267 80"
        style={{ minWidth: "267px", minHeight: "80px" }}
        className="w-full h-[80px] rounded-t"
      >
        <mask id="banner-mask">
          <rect fill="white" x="0" y="0" width="100%" height="100%" />
          <rect width="80" height="80" x="20" y="40" rx="4" ry="4" />
          {/* <circle fill="black" cx="64" cy="109" r="54" /> */}
        </mask>

        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#banner-mask)"
          overflow="visible"
        >
          <div
            className="w-full h-full"
            style={{ backgroundColor: `#${color}`, position: "relative" }}
          >
            <div className="absolute bg-background rounded max-w-[150px] truncate p-1 text-sm left-[110px] top-[40px] text-white">
              {data.firstName} {data.lastName}
            </div>
          </div>
        </foreignObject>
      </svg>
      <div className="flex items-end gap-3 max-h-[40px] px-5">
        <div className="w-20 h-20 bg-background rounded border border-white/10 text-center place-content-center text-xl font-semibold">
          {data.firstName.slice(0, 1).toUpperCase() +
            "" +
            data.lastName.slice(0, 1).toUpperCase()}
        </div>

        <p className="text-xs pb-3 font-semibold">
          {getFormatTime(data.online).formatted}
        </p>
      </div>
    </header>
  );
};
