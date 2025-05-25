import { TaskType } from "../model/types";

const TASKS: TaskType[] = [
  {
    title: "test",
    description:
      "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
    column_status: "TODO",
    board: {
      id: "IDC1234",
    },
    details: {
      author: "Maksym",
      priority: "small",
      date: {
        start: null,
        end: null,
      },
    },
  },
  {
    title: "test",
    description:
      "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
    column_status: "DONE",
    board: {
      id: "IDC1234",
    },
    details: {
      author: "Maksym",
      priority: null,
      date: {
        start: null,
        end: null,
      },
    },
  },
  {
    title: "test",
    description:
      "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
    column_status: "DONE",
    board: {
      id: "IDC1234",
    },
    details: {
      author: "Maksym",
      priority: "small",
      date: {
        start: null,
        end: null,
      },
    },
  },
  {
    title: "test",
    description:
      "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
    column_status: "IN_REVIEW",
    board: {
      id: "IDC1234",
    },
    details: {
      author: "Maksym",
      priority: "small",
      date: {
        start: null,
        end: null,
      },
    },
  },
];

const COLUMN_STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
};

export { TASKS, COLUMN_STATUS };
