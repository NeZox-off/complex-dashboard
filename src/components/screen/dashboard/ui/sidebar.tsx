"use client";
import {
  Button,
  Icon,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import useMainSidebarStore from "@/src/store/dashboard/main-sidebar";
import React from "react";
import Profile from "./profile";
import Navigation from "./navigation";
import Link from "next/link";
import { staticData } from "@/src/lib/static-data";
import { useHistoryLinks } from "@/src/store/dashboard/history-links";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const { show, setShow } = useMainSidebarStore();
  const { setHistoryLink } = useHistoryLinks();
  const account = staticData.account();
  return (
    <aside className="sticky top-0 h-screen z-30">
      <div
        className={cn(
          "transition-all ease-linear h-full space-y-3 flex flex-col relative",
          show ? "w-xs" : "w-18 justify-center"
        )}
      >
        <header className="py-5 px-4 h-full">
          <Profile />
          <Navigation />
        </header>
        <footer className="border-t-2 border-solid border-t-white/10">
          <ul className="px-4 py-5 space-y-2">
            <li>
              {show ? (
                <Button
                  className={cn(
                    "flex w-full justify-start gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
                  )}
                >
                  <Icon name={"UserPlus"} size={24} />
                  {show && "Add to panel"}
                </Button>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className={cn(
                        "flex w-full justify-start gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
                      )}
                    >
                      <Icon name={"UserPlus"} size={24} />
                      {show && "Add to panel"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Add to panel</TooltipContent>
                </Tooltip>
              )}
            </li>
            {account.map((item, index) => (
              <li
                key={`${index}-account-${item.title}`}
                onClick={() =>
                  setHistoryLink({
                    title: 'Account',
                      content: {
                        title: item.title,
                        link: item.link,
                        icon: item.icon,
                      },
                      last_visit: new Date(),
                  })
                }
              >
                {show ? (
                  <Link
                    href={"/dashboard/settings"}
                    className={cn(
                      "flex items-center gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
                    )}
                  >
                    <Icon name={item.icon} size={24} />
                    {show && item.title}
                  </Link>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={"/dashboard/settings"}
                        className={cn(
                          "flex items-center gap-2 px-2 py-2 rounded text-base font-medium transition-all ease-linear bg-inherit border border-solid border-transparent hover:border-white/10 hover:bg-[#191A1C]"
                        )}
                      >
                        <Icon name={item.icon} size={24} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.title}</TooltipContent>
                  </Tooltip>
                )}
              </li>
            ))}
          </ul>
        </footer>
        <button
          onClick={() => setShow()}
          className="absolute h-full hidden w-2 transition-all z-10 ease-linear after:absolute cursor-e-resize -right-[0.3rem] after:inset-y-0 after:right-1/2 after:w-[2px] after:bg-[#333] hover:after:bg-[#333]/80 after:translate-x-1/2 sm:flex"
        ></button>
      </div>
    </aside>
  );
};

export default Sidebar;
