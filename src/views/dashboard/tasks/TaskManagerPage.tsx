import React from "react";
import { TaskContent } from "@/entities/dashboard/task-manager/ui/TaskContent";
import { Button, Icon, Input } from "@/shared/ui";
import { HeaderBlock } from "@/shared/ui/HeaderBlock";

interface TasksManagerProps {}

const TasksManagerPage = ({}: TasksManagerProps) => {
  return (
    <>
      <HeaderBlock
        title="Task Manager"
        description="Task control section."
      />
      <div className="bg-[#191A1C] px-8 py-4 w-full flex justify-between border-y-2 border-y-white/10">
        <label className="text-lg font-bold inline-flex items-center gap-3">
          Search
          <Input
            type="search"
            className="border-2 border-solid border-white/10 rounded px-3 py-2"
          />
        </label>
        <Button
          className="bg-background rounded font-semibold border-2 border-white/10"
          variant={"none"}
        >
          <Icon name="ClipboardPlus" size={20} />
          Create a Task
        </Button>
      </div>
      <TaskContent />
    </>
  );
};

export default TasksManagerPage;
