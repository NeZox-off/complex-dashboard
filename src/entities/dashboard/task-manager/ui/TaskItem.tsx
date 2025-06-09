"use client";
import React, { useState } from "react";
import { cn } from "@/shared/lib";
import { TaskType } from "../model/types";
import { Button, Icon } from "@/shared/ui";
import { IconPriority } from "./IconPriority";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskItemProps {
  taskItem: TaskType;
}

var TaskItem = ({ taskItem }: TaskItemProps) => {
  var [isShowMore, setIsShowMore] = useState(false);
  var handleShowText = () => {
    setIsShowMore((prev) => !prev);
  };
  var colorsPriority = {
    high: "bg-red-500/10 text-red-500 border-red-500 fill-red-500",
    medium:
      "bg-orange-500/10 text-orange-500 border-orange-500 fill-orange-500",
    small: "bg-green-500/10 text-green-500 border-green-500 fill-green-500",
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: taskItem.id,
    data: {
      type: "Task",
      taskItem,
    },
  });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={styles}
      className={cn("bg-background px-3 py-2 group border border-white/10 list-none", isDragging ? "z-10 bg-background/90" : null)}
    >
      <div className="relative space-y-2">
        <div>
          <h4 className="text-2xl font-medium">{taskItem.title}</h4>
          {taskItem.description && (
            <p
              className={cn(
                "text-[#B0B0B0] text-balance cursor-pointer",
                isShowMore ? "line-clamp-none" : "line-clamp-2"
              )}
              onClick={handleShowText}
            >
              {taskItem.description}
            </p>
          )}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            {/* <TaskWorkerItem workers={taskItem} /> */}
            {taskItem.details.priority && (
              <>
                <span className="text-white/20">Priority: </span>
                <span
                  className={cn(
                    "relative p-1 text-sm inline-flex items-center gap-1 border border-dashed",
                    colorsPriority[taskItem.details.priority]
                  )}
                >
                  {taskItem.details.priority.slice(0, 1).toUpperCase() +
                    taskItem.details.priority.slice(1, 999).toLowerCase()}
                  <IconPriority className="top-[-3px] left-[-3px]" />
                  <IconPriority className="bottom-[-3px] left-[-3px]" />
                  <IconPriority className="top-[-3px] right-[-3px]" />
                  <IconPriority className="bottom-[-3px] right-[-3px]" />
                </span>
              </>
            )}
          </div>
          <p className="text-[#707070]/70 text-sm">
            Task was created - {taskItem.details.author}
          </p>
        </div>
        <Button
          variant={"none"}
          className="absolute opacity-0 group-hover:opacity-100 right-0 bottom-0 bg-[#191A1C] p-1 rounded border border-white/10"
        >
          <Icon name="Settings" size={20} />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
