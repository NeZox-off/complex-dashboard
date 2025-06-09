import { TaskType } from "../model/types";

const TASKS: TaskType[] = [
  {
    id: "2278-30-6a00",
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
    id: "9ea7-3b-cef0",
    title: "Плагин",
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
    id: "7b1a-132-18f9",
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
    id: "053d-4b-715c",
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
