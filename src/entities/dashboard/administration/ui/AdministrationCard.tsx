import React from "react";
import { RoleType, UserType } from "../model";
import { cn } from "@/shared/lib";
import { AdministrationCardHeader } from "./AdministrationCardHeader";
import { AdministrationCardBody } from "./AdministrationCardBody";

interface AdministrationCardProps {
  data: UserType;
  color: RoleType["color"];
}

export const AdministrationCard = ({
  data,
  color,
}: AdministrationCardProps) => {
  return (
    <div className={cn("w-[267px] bg-[#191A1C] rounded relative space-y-3 pb-5")}>
      <AdministrationCardHeader data={data} color={color} />
      <AdministrationCardBody userId={data.id} />
    </div>
  );
};
