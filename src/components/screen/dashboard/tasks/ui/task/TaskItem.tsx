import { Tasks } from "@/src/lib/type";
import React from "react";
import TaskItemWorkers from "./TaskItemWorkers";

interface TaskItemProps {
  taskItem: Tasks;
}

const TaskItem = ({ taskItem }: TaskItemProps) => {
  return (
    <li>
      <div className="p-4">
        <div>
          <h4 className="text-base font-medium">{taskItem.title}</h4>
          <p>{taskItem.description}</p>
        </div>
        <div>
          <div>
            <TaskItemWorkers workers={taskItem.workers} />
            {taskItem.task.priority && <span>{taskItem.task.priority}</span>}
          </div>
          <p>Task was created - {taskItem.task.author}</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
