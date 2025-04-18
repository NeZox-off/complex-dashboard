"use client";
import { Button, Icon } from "@/src/components/ui";
import React from "react";
import TasksHead from "./ui/TasksHead";
import TasksNavigation from "./ui/TasksNavigation";
import BoardList from "./ui/BoardList";
import { useSearchParams } from "next/navigation";

interface TasksManagerProps {}

const TasksManager = ({}: TasksManagerProps) => {
  const test = useSearchParams().get("board")
  console.log(test);
  
  return (
    <div className="max-h-screen flex flex-col">
      <TasksHead />
      <TasksNavigation />
      <div className="flex-1 overflow-y-auto flex flex-col items-center px-8 pt-6 pb-24">
        <BoardList />
      </div>
    </div>
  );
};

export default TasksManager;
