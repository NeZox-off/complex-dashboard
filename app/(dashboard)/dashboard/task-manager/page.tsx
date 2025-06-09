"use client";
import { DndKitProvider } from "@/app/providers";
import TasksManagerPage from "@/views/dashboard/tasks/TaskManagerPage";
import React from "react";

interface PageProps {}

const Page = ({}: PageProps) => {
  return (
    <DndKitProvider>
      <TasksManagerPage />
    </DndKitProvider>
  );
};

export default Page;
