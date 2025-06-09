import { HistoryLinks, TransformationCurrentPathnameType } from "..";

export const GLOBAL_PATH = "/dashboard";

export const STATIC_ROUTE: { [key: string]: HistoryLinks } = {
  "/dashboard": {
    title: "Quick Access",
    content: {
      title: "Dashboard",
      link: "/dashboard",
      icon: "House",
    },
    last_visit: new Date(),
  },
  "/dashboard/task-manager": {
    title: "Quick Access",
    content: {
      title: "Task manager",
      link: "/dashboard",
      icon: "ListToDo",
    },
    last_visit: new Date(),
  },
  "/dashboard/administration": {
    title: "Quick Access",
    content: {
      title: "Administration",
      link: "/dashboard",
      icon: "Settings2",
    },
    last_visit: new Date(),
  },
};

export const TRANSFORM_CURRENT_PATH: TransformationCurrentPathnameType = {
  dashboard: "Dashboard",
  "task-manager": "Task manager",
  administration: "Administration",
};
