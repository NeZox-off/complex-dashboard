import { z } from "zod";

const dateSchema = z.union([z.string(), z.number(), z.date(), z.null()]);

const userSchema = z.object({
  id: z.string(),
  fullName: z.string(),
});

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  column_status: z.enum(["TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"]),
  teams: z.union([z.array(userSchema), z.null()]),
  details: z.object({
    author: z.string(),
    priority: z.union([z.enum(["high", "medium", "small"]), z.null()]),
    date: z.object({
      start: dateSchema,
      end: dateSchema,
    }),
  }),
});

const taskStoreSchema = z.object({
  tasks: z.array(taskSchema),
  searchQuery: z.string(),
  setSearchQuery: z.function().args(z.string()).returns(z.void()),
  setTasks: z.function().args(z.array(taskSchema)).returns(z.void()),
  removeTask: z.function().args(z.array(taskSchema)).returns(z.void()),
  searchTasks: z.function().args(z.array(taskSchema)).returns(z.void()),
});

type TaskType = z.infer<typeof taskSchema>;
type TaskStoreType = z.infer<typeof taskStoreSchema>;

export { taskSchema, type TaskType, taskStoreSchema, type TaskStoreType };
