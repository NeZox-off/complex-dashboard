import React from "react";
import { TEST_ROLES } from "../config";
import { AdministrationRow } from "./AdministrationRow";
import { TEST_USERS } from "@/shared/config";

interface AdministrationContentProps {}

export const AdministrationContent = ({}: AdministrationContentProps) => {
  return (
    <div className="pl-8 pt-6 overflow-y-auto pb-28 space-y-5">
      {TEST_ROLES.map((item, index) => (
        <AdministrationRow
          key={`admin-row-${item.title}-${index}`}
          title={item.title}
          color={item.color}
          users={TEST_USERS.filter((user) =>
            typeof user.role === "string"
              ? user.role === item.title
              : user.role.includes(item.title)
          )}
        />
      ))}
    </div>
  );
};
