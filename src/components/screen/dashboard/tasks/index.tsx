"use client";
import { Button, Icon } from "@/src/components/ui";
import React from "react";
import TasksHead from "./ui/TasksHead";
import TasksNavigation from "./ui/TasksNavigation";
import BoardList from "./ui/BoardList";
import { useSearchParams } from "next/navigation";
import TasksList from "./ui/TasksList";

interface TasksManagerProps {}

const TasksManager = ({}: TasksManagerProps) => {
  const boardParams = useSearchParams().get("board");
  return (
    <div className="max-h-screen flex flex-col">
      <TasksHead />
      <TasksNavigation />
      <div className="flex-1 overflow-y-auto flex flex-col items-center px-8 pt-6 pb-24">
        {boardParams ? <TasksList params={boardParams} /> : <BoardList />}
      </div>
    </div>
  );
};

export default TasksManager;
