import { uuid } from "@/shared/model/hooks/uuid";
import { z } from "zod";

/* GLOBAL */

const userSchema = z.object({
  id: z.string().default(() => uuid()),
  firstName: z.string(),
  lastName: z.string(),
  url: z.union([z.string(), z.null()]),
  online: z.union([z.string(), z.number(), z.date()]),
  haveTotalTasks: z.number(),
  email: z.string().email(),
  role: z.union([z.array(z.string()), z.string()]),
  priority: z.number(),
});

const ruleConfigSchema = z.object({
  title: z.string(),
  description: z.string(),
  checked: z.boolean(),
});

/* DASHBOARD */
const dashBoardPermissionsSchema = z.object({
  createTask: ruleConfigSchema,
  updateTask: ruleConfigSchema,
  deleteTask: ruleConfigSchema,
  createRole: ruleConfigSchema,
  updateRole: ruleConfigSchema,
  deleteRole: ruleConfigSchema,
});

/* PEOPLE */
const peoplePermissionsSchema = z.object({
  addPeople: ruleConfigSchema,
  deletePeople: ruleConfigSchema,
  updatePeople: ruleConfigSchema,
});

/* RESULT */
const roleSchema = z.object({
  title: z.string(),
  color: z.string(),
  permissions: z.object({
    dashboard: dashBoardPermissionsSchema,
    people: peoplePermissionsSchema,
  }),
});

/* TYPES */
type UserType = z.infer<typeof userSchema>;
type RoleType = z.infer<typeof roleSchema>;

export { type UserType, userSchema, type RoleType, roleSchema };
