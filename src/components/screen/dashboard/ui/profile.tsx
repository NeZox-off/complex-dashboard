import { cn } from "@/src/lib/utils";
import useMainSidebarStore from "@/src/store/dashboard/main-sidebar";
import useUserStore from "@/src/store/user";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  url?: string;
}

const Profile = ({ url }: ProfileProps) => {
  const { user } = useUserStore();
  const { show } = useMainSidebarStore();
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-sm transition-all ease-linear mb-3",
        show ? "justify-start" : "p-1 hover:bg-[#191A1C]"
      )}
    >
      {url ? (
        <Image src={url} alt="Profile image" />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center rounded p-1 transition-all h-8 w-8 ease-linear bg-[#191A1C] text-xs border border-solid border-white/10 select-none",
            !show && "hover:bg-[#191A1C]/60"
          )}
        >
          {user?.firstName.slice(0, 1) + "" + user?.lastName.slice(0, 1)}
        </div>
      )}
      {show && (
        <p className="select-none font-medium whitespace-nowrap">
          {user?.firstName} {user?.lastName}
        </p>
      )}
    </div>
  );
};

export default Profile;
