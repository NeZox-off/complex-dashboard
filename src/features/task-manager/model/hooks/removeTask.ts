import { useTaskStore } from "@/entities/dashboard/task-manager/model/tasks-store";

export const useRemoveTask = () => {
  const { removeTask, tasks } = useTaskStore();

  function deleteTask(taskId: string) {
    const removedTask = tasks.filter((task) => task.id !== taskId);
    removeTask(removedTask);
  }

  return { deleteTask, tasks };
};
