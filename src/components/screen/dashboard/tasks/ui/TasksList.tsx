import React from "react";
import NothingBlock from "./NothingBlock";
import { staticData } from "@/src/lib/static-data";
import TaskCategory from "./task/TaskCategory";

interface TasksListProps {
  params: string;
}

const TasksList = ({ params }: TasksListProps) => {
  const boards = staticData.boards();
  const findBoard =
    boards.length !== 0
      ? boards.find((item) => item.board.boardId === params)
      : null;
  const categories = findBoard?.board.categories;
  return <div className="overflow-x-auto h-full flex-col items-center pl-8 pt-6">{findBoard ? <TaskCategory categories={categories} board={findBoard} /> : <NothingBlock />}</div>;
};

export default TasksList;
