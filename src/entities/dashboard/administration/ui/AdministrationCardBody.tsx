import React from "react";
import { TASKS } from "../../task-manager/config";
import { Button } from "@/shared/ui";

interface AdministrationCardBodyProps {
  userId: string;
}

export const AdministrationCardBody = ({
  userId,
}: AdministrationCardBodyProps) => {
  const count = TASKS.filter((task) =>
    task.teams?.some((item) => item.id === userId)
  ).length ;
  return (
    <div className="px-5 space-y-4">
      <p className="inline-flex gap-3 items-center text-white/40">Tasks <span className="block bg-background rounded-full py-0.5 px-2 min-w-auto min-h-auto text-xs place-content-center text-center text-white">{count > 9 ? "9+" : count}</span></p>
      <Button
        variant={"none"}
        className="p-0 hover:text-white/40 bg-background w-full rounded py-1 text-base border border-white/10"
      >
        Edit
      </Button>
    </div>
  );
};
