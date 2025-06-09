import { FC } from "react";
import { RoleType, UserType } from "../model";
import { AdministrationCard } from "./AdministrationCard";

interface AdministrationRowProps {
  title: RoleType["title"];
  color: RoleType["color"];
  users: UserType[];
}

export const AdministrationRow: FC<AdministrationRowProps> = ({
  title,
  color,
  users,
}) => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl">{title}</h2>
      <div className="flex items-start flex-wrap gap-6">
        {users.map((item, index) => (
          <AdministrationCard
            color={color}
            data={item}
            key={`admin-card-${index}-${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};
