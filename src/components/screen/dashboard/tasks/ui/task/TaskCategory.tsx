import { Board } from "@/src/lib/type";
import React from "react";
import NothingBlock from "../NothingBlock";
import TaskItem from "./TaskItem";
import { Button, Icon } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";

interface TaskCategoryProps {
  categories?: Board["board"]["categories"] | null;
  board?: Board | null;
}

const TaskCategory = ({ categories, board }: TaskCategoryProps) => {
  return (
    <div className="container flex items-start overflow-x-auto gap-4">
      {categories?.length !== 0 ? (
        categories?.map((item, index) => (
          <div
            key={`${item.title}-category-${index}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xl">{item.title}</h2>
                <span className="bg-[#191A1C] rounded-full w-5 h-5 text-sm text-center text-white">
                  {board?.totalTasks}
                </span>
                <span className="text-background py-0.5 px-2 bg-primary rounded-full font-semibold text-xs">
                  {item.status}
                </span>
              </div>
              <Button className="bg-transparent p-1 rounded-full hover:bg-[#191A1C] text-white/60">
                <Icon name="Ellipsis" size={20} />
              </Button>
            </div>
            <ul>
              {item.tasks?.map((task_item, task_index) => (
                <TaskItem
                  taskItem={task_item}
                  key={`${task_item.title}-task-${task_index}`}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <NothingBlock />
      )}
    </div>
  );
};

export default TaskCategory;
