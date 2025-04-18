import { Button, Icon } from "@/src/components/ui";
import { staticData } from "@/src/lib/static-data";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface TasksNavigationProps {}

const TasksNavigation = ({}: TasksNavigationProps) => {
  const boards = staticData.boards();
  const params = useSearchParams().get("board")
  return (
    <div className="px-6 py-3 bg-[#191A1C] flex items-center justify-between border-y-2 border-solid border-white/10">
      <ul className="w-full flex items-center gap-3 overflow-hidden">
        {boards.map((item, index) => (
          <li key={`board-nav-${item.board.boardId}`}>
            <Link
              href={"#"}
              className={cn("inline-flex items-center gap-2 px-5 py-2 border border-solid rounded bg-background text-lg font-medium", params === item.board.boardId ? "border-primary text-primary" : "border-white/10" )}
            >
              <Icon name="LockOpen" size={20} />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="px-3 py-2 bg-background rounded text-lg hover:bg-[#191A1C] border-white/10 border-2">
        <Icon name="Plus" size={24} />
        Create a board
      </Button>
    </div>
  );
};

export default TasksNavigation;
