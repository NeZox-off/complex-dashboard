import { Button, Icon } from "@/src/components/ui";
import React from "react";
import NothingBlock from "./NothingBlock";
import Link from "next/link";
import { staticData } from "@/src/lib/static-data";

interface BoardListProps {}

const BoardList = ({}: BoardListProps) => {
  const boards = staticData.boards();
  return (
    <div className="flex-1 overflow-y-auto flex flex-col items-center px-8 pt-6 pb-24">
      {boards.length !== 0 ? (
        <ul className="container mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {boards.map((item, index) => (
            <li
              className="py-3 px-4 bg-[#191A1C] min-w-1/6 rounded"
              key={`${index}-task-${item.title}`}
            >
              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <span className="text-xs text-white/40">Title:</span>
                  <h2 className="text-3xl">{item.title}</h2>
                </div>
                <span className="w-full h-0.5 bg-white/10"></span>
                <div className="inline-flex items-center justify-between">
                  Total tasks:
                  <span className="bg-background rounded-full w-5 h-5 text-sm text-center text-white">
                    {item.totalTasks}
                  </span>
                </div>
                <span className="w-full h-0.5 bg-white/10"></span>
                <ul className="flex flex-col gap-1">
                  <li className="inline-flex items-center justify-between text-sm text-white/40">
                    Quantity of team members:
                    <span className="bg-background rounded-full w-5 h-5 text-sm text-center text-white">
                        {item.board.quantityOfTeam}
                    </span>
                  </li>
                  <li className="inline-flex items-center justify-between text-sm text-white/40">
                    Board ID:
                    <span className="text-[#1CA2AB]">{item.board.boardId}</span>
                  </li>
                  <li className="inline-flex items-center justify-between text-sm text-white/40">
                    Date of board creation:
                    <span className="text-[#E04E72]">4, January 2025</span>
                  </li>
                </ul>
              </div>
              <Button
                hasIcon={"default"}
                className="w-full py-2 gap-1 pl-6 rounded bg-background hover:bg-[#191A1C] border-2 border-solid border-white/10 text-base"
                asChild
              >
                <Link href={`/dashboard/tasks?board=${item.board.boardId}`}>
                  Go to <Icon name="ChevronRight" size={20} />
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <NothingBlock />
      )}
    </div>
  );
};

export default BoardList;
