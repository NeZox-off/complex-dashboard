import React from "react";

interface TasksManagerProps {}

const TasksManager = ({}: TasksManagerProps) => {
  return (
    <div>
      <div>
        <div>
          <h1>Task manager</h1>
          <p>Choose a board to perform the tasks:</p>
        </div>
        <input/>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TasksManager;
