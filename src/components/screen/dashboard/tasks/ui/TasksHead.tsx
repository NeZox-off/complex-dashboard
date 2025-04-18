import { Input } from "@/src/components/ui";
import React from "react";

interface TasksHeadProps {}

const TasksHead = ({}: TasksHeadProps) => {
  return (
    <div className="px-6 pt-4 pb-2 flex items-center justify-between">
      <div>
        <h1 className="text-4xl">Task manager</h1>
        <p className="text-white/40">Choose a board to perform the tasks:</p>
      </div>
      <Input
        placeholder="Search"
        className="max-w-3xs border-white/10 px-3 py-2 rounded placeholder:text-white"
      />
    </div>
  );
};

export default TasksHead;
