"use client";
import React, { FC, useMemo } from "react";
import { TaskColumn } from "./TaskColumn";
import { useTaskStore } from "../model/tasks-store";

interface TaskContentProps {}

export const TaskContent: FC<TaskContentProps> = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const searchQuery = useTaskStore((state) => state.searchQuery);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);
  
  return (
    <div className="grid grid-cols-4 gap-6">
      <TaskColumn
        status="TODO"
        tasks={filteredTasks.filter((item) => item.column_status === "TODO")}
      />
      <TaskColumn
        status="IN_PROGRESS"
        tasks={filteredTasks.filter(
          (item) => item.column_status === "IN_PROGRESS"
        )}
      />
      <TaskColumn
        status="IN_REVIEW"
        tasks={filteredTasks.filter(
          (item) => item.column_status === "IN_REVIEW"
        )}
      />
      <TaskColumn
        status="DONE"
        tasks={filteredTasks.filter((item) => item.column_status === "DONE")}
      />
    </div>
  );
};
