import { useTaskStore } from "@/entities/dashboard/task-manager/model/tasks-store";
import {
  taskSchema,
  TaskType,
} from "@/entities/dashboard/task-manager/model/types";

export const useAddTask = () => {
  const { setTasks, tasks } = useTaskStore();

  function addTask(data: TaskType) {
    taskSchema.safeParse(data);
    setTasks([...tasks, data]);
  }

  return { addTask, tasks };
};
