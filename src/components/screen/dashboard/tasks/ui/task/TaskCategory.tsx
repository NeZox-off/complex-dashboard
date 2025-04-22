import { Board, Colors } from "@/src/lib/type";
import React, { useState } from "react";
import NothingBlock from "../NothingBlock";
import TaskItem from "./TaskItem";
import { Button, Icon } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import TaskCategoryHead from "./TaskCategoryHead";

interface TaskCategoryProps {
  categories?: Board["board"]["categories"] | null;
  board?: Board | null;
}

var TaskCategory = ({ categories, board }: TaskCategoryProps) => {
  var colorsBorder: Colors = {
    red: "border-b-red-500",
    yellow: "border-b-yellow-500",
    blue: "border-b-blue-900",
    green: "border-b-green-500",
    orange: "border-b-orange-500",
    pink: "border-b-pink-500",
    purple: "border-b-purple-950",
    black: "border-b-black",
    white: "border-b-white",
    brown: "border-b-amber-950",
  };

  return (
    <div className="flex h-full items-start overflow-x-auto gap-4">
      {categories?.length !== 0 ? (
        categories?.map((item, index) => (
          <div
            key={`${item.title}-category-${index}`}
            className="min-w-[min(350px,100%)]"
          >
            <TaskCategoryHead board={board} status={item?.status} />
            <div
              className={cn(
                "bg-[#191A1C] rounded-sm border-b-2 border-solid p-3 w-full space-y-3",
                colorsBorder[item.color]
              )}
            >
              <ul>
                {item.tasks?.map((task_item, task_index) => (
                  <TaskItem
                    taskItem={task_item}
                    key={`${task_item.title}-task-${task_index}`}
                  />
                ))}
              </ul>
              <Button variant={"none"} className="p-0 hover:opacity-50">
                <Icon name="SquarePlus" size={24} />
                Add task
              </Button>
            </div>
          </div>
        ))
      ) : (
        <NothingBlock />
      )}
    </div>
  );
};

export default TaskCategory;
