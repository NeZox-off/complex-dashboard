import { cn } from "@/shared/lib";
import { useSidebarShowStore } from "@/shared/model";
import {
  Button,
  Icon,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  IconProps,
} from "@/shared/ui";
import Link from "next/link";
import React, { ButtonHTMLAttributes, FC } from "react";

interface SettingsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asLink: boolean;
  icon: IconProps["name"];
  itemTitle: string;
  link: string | null;
}

export const SettingsItem: FC<SettingsItemProps> = (
  { asLink = false, icon, link, itemTitle },
  ...props
) => {
  const { show } = useSidebarShowStore();
  return (
    <li>
      {show ? (
        <React.Fragment>
          {asLink ? (
            <Link
              href={link!}
              className={cn(
                "flex items-center gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
              )}
            >
              <Icon name={icon} size={24} />
              {show && itemTitle}
            </Link>
          ) : (
            <Button
              className={cn(
                "flex w-full justify-start gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
              )}
              {...props}
            >
              <Icon name={"UserPlus"} size={24} />
              {show && itemTitle}
            </Button>
          )}
        </React.Fragment>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className={cn(
                "flex w-full justify-start gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
              )}
              {...props}
            >
              <Icon name={icon} size={24} />
              {show && itemTitle}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">{itemTitle}</TooltipContent>
        </Tooltip>
      )}
    </li>
  );
};
