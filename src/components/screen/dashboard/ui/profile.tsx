import useUserStore from "@/src/store/user";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  url?: string;
}

const Profile = ({ url }: ProfileProps) => {
  const { user } = useUserStore();
  return (
    <div className="mb-3">
      <div className="flex items-center gap-3 hover:bg-[#191A1C] p-1 rounded-sm transition-all ease-linear">
        {url ? (
          <Image src={url} alt="Profile image" />
        ) : (
          <div className="inline-flex items-center justify-center rounded w-8 h-8 bg-[#191A1C] text-sm border border-solid border-white/10">
            {user?.firstName.slice(0, 1) + "" + user?.lastName.slice(0, 1)}
          </div>
        )}
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    </div>
  );
};

export default Profile;
