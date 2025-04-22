import { Button, Icon } from "@/src/components/ui";
import { Board, TaskCategory } from "@/src/lib/type";
import React, { useState } from "react";

interface TaskCategoryHeadProps {
  board?: Board | null;
  status: TaskCategory["status"];
}

const TaskCategoryHead = ({ board, status }: TaskCategoryHeadProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(board?.title);
  const handleSaveTitle = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 pl-3">
        {isEditing ? (
          <input
            className="text-lg inline-flex font-semibold rounded border-none outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleSaveTitle}
            onKeyDown={(e) => e.key === "Enter" && handleSaveTitle()}
            autoFocus
          />
          
        ) : (
          <h2
            className="text-lg font-semibold cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            {title}
          </h2>
        )}
        <span className="bg-[#191A1C] rounded-full w-5 h-5 text-sm text-center text-white">
          {board?.totalTasks}
        </span>
        <span className="text-background py-0.5 px-2 bg-primary rounded-full font-semibold text-xs">
          {status}
        </span>
      </div>
      <Button className="bg-transparent p-1 rounded-full hover:bg-[#191A1C] text-white/60">
        <Icon name="Ellipsis" size={20} />
      </Button>
    </div>
  );
};

export default TaskCategoryHead;
