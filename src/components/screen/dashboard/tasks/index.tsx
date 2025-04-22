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
    <div className="max-h-screen flex flex-col h-full">
      <TasksHead />
      <TasksNavigation />
      {boardParams ? <TasksList params={boardParams} /> : <BoardList />}
    </div>
  );
};

export default TasksManager;
