import { cn } from "@/shared/lib";
import React, { FC, SVGAttributes } from "react";

interface IconPriorityProps extends SVGAttributes<HTMLOrSVGElement> {}

export const IconPriority: FC<IconPriorityProps> = ({ className, ...props }) => {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      className={cn("absolute fill-inherit", className)}
      {...props}
    >
      <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </svg>
  );
};
