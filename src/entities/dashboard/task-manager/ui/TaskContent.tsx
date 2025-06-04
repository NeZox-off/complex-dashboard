import React, { FC } from "react";
import { TaskColumn } from "./TaskColumn";
import { TASKS } from "../config";

interface TaskContentProps {}

export const TaskContent: FC<TaskContentProps> = ({}) => {
  return (
      <div className="grid grid-cols-4 gap-6">
        <TaskColumn
          status="TODO"
          tasks={TASKS.filter((item) => item.column_status === "TODO")}
        />
        <TaskColumn
          status="IN_PROGRESS"
          tasks={TASKS.filter((item) => item.column_status === "IN_PROGRESS")}
        />
        <TaskColumn
          status="IN_REVIEW"
          tasks={TASKS.filter((item) => item.column_status === "IN_REVIEW")}
        />
        <TaskColumn
          status="DONE"
          tasks={TASKS.filter((item) => item.column_status === "DONE")}
        />
      </div>
  );
};
