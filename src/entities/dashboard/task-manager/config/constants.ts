import { TaskType } from "../model/types";

const TASKS: TaskType[] = [
  {
    title: "test",
    description:
      "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
    column_status: "TODO",
    teams: [
      {
        id: "57c6-13a-3302",
        fullName: "Maksym Poliakov",
      },
    ],
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
    teams: null,
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
    teams: null,
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
    teams: null,
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
