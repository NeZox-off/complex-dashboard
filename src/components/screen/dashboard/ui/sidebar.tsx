"use client";
import { Icon } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import useMainSidebarStore from "@/src/store/dashboard/main-sidebar";
import Link from "next/link";
import React from "react";
import Profile from "./profile";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const { show, setShow } = useMainSidebarStore();
  return (
    <aside className="max-w-80 h-full flex items-center">
      <div
        className={cn(
          "transition-all ease-linear h-full px-4 py-5",
          show ? "w-full" : "w-12"
        )}
      >
        <header>
          <Profile />
          <Link
            href={"/dashboard"}
            className="bg-primary/20 inline-flex items-center gap-3 py-3 px-4 w-full rounded-sm text-primary/80 font-bold transition-all ease-linear hover:text-primary/70 hover:bg-primary/25"
          >
            <Icon name="Grid2x2" size={24} />
            Dashboard
          </Link>
        </header>
      </div>
      <button
        onClick={() => setShow()}
        className="relative h-full hidden w-4 transition-all ease-linear after:absolute cursor-e-resize after:inset-y-0 after:right-1/2 after:w-[2px] after:bg-sidebar-border hover:after:bg-sidebar-border/80 after:translate-x-1/2 sm:flex"
      ></button>
    </aside>
  );
};

export default Sidebar;
