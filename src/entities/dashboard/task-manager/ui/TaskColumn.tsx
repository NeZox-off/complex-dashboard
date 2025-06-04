import React, { FC } from "react";
import { COLUMN_STATUS, TASKS } from "../config";
import { cn } from "@/shared/lib";
import { Button, Icon } from "@/shared/ui";
import { TaskType } from "../model/types";
import TaskItem from "./TaskItem";

interface TaskColumnProps {
  status: TaskType["column_status"];
  tasks: TaskType[];
}

const COLOR_STATUS = {
  TODO: "text-blue-500",
  IN_PROGRESS: "text-orange-500",
  IN_REVIEW: "text-amber-500",
  DONE: "text-lime-500",
};

export const TaskColumn: FC<TaskColumnProps> = ({ tasks, status }) => {
  return (
    <div className="shrink-0 flex flex-col bg-[#191A1C] shadow-md pt-6 pb-3 px-3 border-x-2 border-b-2 border-white/10 rounded-b">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 pl-3">
          <h2 className={cn("text-xl font-semibold", COLOR_STATUS[status])}>
            {COLUMN_STATUS[status]}
          </h2>
          <span className="bg-background rounded-full w-5 h-5 text-xs place-content-center text-center text-white">
            {tasks.length}
          </span>
        </div>
        <Button className="bg-transparent p-1 rounded-full hover:bg-[#191A1C] text-white/60">
          <Icon name="Ellipsis" size={20} />
        </Button>
      </div>
      <div className={cn("space-y-3 h-full flex flex-col")}>
        {tasks.length !== 0 && (
          <ul className="grid gap-3 mb-3">
            {tasks?.map((item, index) => (
              <TaskItem taskItem={item} key={`${item.title}-task-${index}`} />
            ))}
          </ul>
        )}
      </div>
      <Button
        variant={"none"}
        className="p-0 hover:text-white/40 bg-background w-full rounded py-2 text-base border border-white/10"
      >
        <Icon name="ClipboardPlus" size={20} />
        Add task
      </Button>
    </div>
  );
};
