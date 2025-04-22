import { Tasks } from "@/src/lib/type";
import React, { useState } from "react";
import TaskItemWorkers from "./TaskItemWorkers";
import { cn } from "@/src/lib/utils";

interface TaskItemProps {
  taskItem: Tasks;
}

var TaskItem = ({ taskItem }: TaskItemProps) => {
  var [isShowMore, setIsShowMore] = useState(false);
  var handleShowText = () => {
    setIsShowMore((prev) => !prev);
  };

  var colorsPriority = {
    high: "bg-red-500/10 text-red-500",
    medium: "bg-orange-500/10 text-orange-500",
    small: "bg-green-500/10 text-green-500",
  };

  return (
    <li className="bg-background px-3 py-2 rounded-sm">
      <div>
        <div className="mb-4">
          <h4 className="text-xl font-medium">{taskItem.title}</h4>
          {taskItem.description && (
            <p
              className={cn(
                "text-base text-[#B0B0B0] text-balance cursor-pointer",
                isShowMore ? "line-clamp-none" : "line-clamp-2"
              )}
              onClick={handleShowText}
            >
              {taskItem.description}
            </p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <TaskItemWorkers workers={taskItem.workers} />
            {taskItem.task.priority && (
              <span
                className={cn(
                  "rounded p-1 text-sm",
                  colorsPriority[taskItem.task.priority]
                )}
              >
                {taskItem.task.priority.slice(0, 1).toUpperCase() +
                  taskItem.task.priority.slice(1, 999).toLowerCase()}
              </span>
            )}
          </div>
          <p className="text-[#707070]/70 text-sm">
            Task was created - {taskItem.task.author}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
