"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Icon,
} from "@/shared/ui";
import { useSidebarShowStore } from "@/shared/model";
import { FC } from "react";
import { useUserStore } from "@/entities/user/@x/userStore";
import Image from "next/image";
import { cn } from "@/shared/lib";
interface UserProfileProps {}

export const UserProfile: FC<UserProfileProps> = ({}) => {
  const { user } = useUserStore();
  const { show } = useSidebarShowStore();

  const profile = (
    <div
      className={cn(
        "flex items-center justify-center rounded p-1 transition-all h-8 w-8 ease-linear bg-[#191A1C] text-xs border border-solid border-white/10 select-none",
        !show && "hover:bg-[#191A1C]/60"
      )}
    >
      {user?.url ? (
        <Image src={user!.url} alt="Profile image" />
      ) : (
        user?.firstName.slice(0, 1) + "" + user?.lastName.slice(0, 1)
      )}
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            "flex items-center gap-3 rounded transition-all p-1 hover:bg-[#191A1C] ease-linear mb-3",
            show ? "justify-start" : null
          )}
        >
          {show ? (
            <>
              {profile}
              {show && (
                <p className="select-none font-medium whitespace-nowrap">
                  {user?.firstName} {user?.lastName}
                </p>
              )}
            </>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>{profile}</TooltipTrigger>
              <TooltipContent side="right">
                <p className="select-none font-medium whitespace-nowrap">
                  {user?.firstName} {user?.lastName}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="min-w-64 rounded"
      >
        {show ? null : (
          <>
            <DropdownMenuLabel className="flex items-center gap-3">
              {profile}
              <p className="select-none text-lg font-medium whitespace-nowrap">
                {user?.firstName} {user?.lastName}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem>
          <Icon name="Settings" size={24} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name="LogOut" size={24} /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
