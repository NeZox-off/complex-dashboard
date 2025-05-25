import React from "react";
import { TaskContent } from "@/entities/dashboard/task-manager/ui/TaskContent";
import { Button, Icon, Input } from "@/shared/ui";

interface TasksManagerProps {}

const TasksManagerPage = ({}: TasksManagerProps) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <h1 className="text-4xl px-8 pt-6 mb-6">Task Manager</h1>
      <div className="bg-[#191A1C] px-8 py-4 w-full flex justify-between border-y-2 border-y-white/10">
        <label className="text-lg font-bold inline-flex items-center gap-3">
          Search
          <Input type="search" className="border-2 border-solid border-white/10 rounded px-3 py-2" />
        </label>
        <Button className="bg-background rounded font-semibold border-2 border-white/10" variant={'none'}>
          <Icon name="ClipboardPlus" size={20} />
          Create a Task
        </Button>
      </div>
      <TaskContent />
    </div>
  );
};

export default TasksManagerPage;
