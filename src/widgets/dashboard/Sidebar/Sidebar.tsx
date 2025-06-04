"use client";
import React from "react";
import { cn } from "@/shared/lib";
import { SETTINGS_FEATURES } from "@/shared/config";
import { useSidebarShowStore } from "@/shared/model";
import Navigation from "./Navigation";
import { SettingsItem } from "./AccountItem";
import { UserProfile } from "@/features/user/@x/user";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const { show, setShow } = useSidebarShowStore();
  return (
    <aside className="sticky top-0 h-screen z-30">
      <div
        className={cn(
          "transition-all ease-linear h-full space-y-3 flex flex-col relative",
          show ? "w-xs" : "w-18 justify-center"
        )}
      >
        <div className="py-5 px-4 h-full">
          <UserProfile />
          <Navigation />
        </div>
        <footer className="border-t-2 border-solid border-t-white/10">
          <ul className="px-4 py-5 space-y-2">
            {SETTINGS_FEATURES.map((item, keyIndex) => (
              <SettingsItem
                key={keyIndex}
                itemTitle={item.title}
                link={item.link}
                icon={item.icon}
                asLink={item.asLink}
              />
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
