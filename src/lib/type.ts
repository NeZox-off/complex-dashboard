import { IconProps } from "../components/ui";

// STATIC DATA

export type AccountData = {
  title: string;
  link: string;
  icon: IconProps["name"];
};

export type ContentData = {
  title: string;
  link: string;
  icon: IconProps["name"];
};

export type NavigationData = {
  title: string;
  content?: ContentData[];
};

// TASKS PAGE

export type Worker = {
  name: string;
  email: string;
  avatar: string;
};

export type TaskCategory = {
  title: string;
  status: "new" | "recently" | "old";
  color:
    | "red"
    | "yellow"
    | "blue"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "black"
    | "white"
    | "brown";
  tasks: Tasks[] | null;
};

export type Comments = {
  title: string;
  date: Date | string | null;
  isEdited: boolean;
  sender: {
    name: string;
    email: string;
  };
};

export type AuthorTask = {
  author: string;
  priority: "high" | "medium" | "small" | null;
  date: {
    start: Date | string | null;
    end: Date | string | null;
  };
  comments: Comments[] | null;
};

export type Tasks = {
  title: string;
  description: string | null;
  workers: Worker[] | null;
  task: AuthorTask;
};

export type Board = {
  title: string;
  totalTasks: number;
  board: {
    boardId: string;
    quantityOfTeam: number;
    date: Date | string;
    categories: TaskCategory[] | null;
  };
};
