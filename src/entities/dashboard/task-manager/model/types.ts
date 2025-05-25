import { z } from "zod";

const dateSchema = z.union([z.string(), z.number(), z.date(), z.null()]);

const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  board: z.object({
    id: z.string(),
  }),
  column_status: z.enum(["TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"]),
  details: z.object({
    author: z.string(),
    priority: z.union([z.enum(["high", "medium", "small"]), z.null()]),
    date: z.object({
      start: dateSchema,
      end: dateSchema,
    }),
  }),
});

type TaskType = z.infer<typeof taskSchema>;

export { taskSchema, type TaskType };
