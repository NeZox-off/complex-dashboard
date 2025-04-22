import { AccountData, Board, NavigationData } from "./type";

interface TransformationCurrentPathnameType {
  [key: string]: string | undefined;
}

const GLOBAL_PATH = "/dashboard";

export const staticData = {
  navigation: () => {
    let data: NavigationData[] = [
      {
        title: "Quick Access",
        content: [
          {
            title: "Dashboard",
            link: "",
            icon: "House",
          },
          {
            title: "Task manager",
            link: "/tasks",
            icon: "ListTodo",
          },
          {
            title: "Control",
            link: "/control",
            icon: "Settings2",
          },
        ],
      },
    ];
    for (let i = 0; i < data.length; i++) {
      const content = data[i]!.content;
      if (content) {
        for (let k = 0; k < content.length; k++) {
          content[k].link = GLOBAL_PATH + content[k].link;
        }
      } else {
        return data;
      }
    }
    return data;
  },
  account: () => {
    let data: AccountData[] = [
      {
        title: "Settings",
        icon: "Settings",
        link: `${GLOBAL_PATH}/settings`,
      },
      {
        title: "Help",
        icon: "CircleHelp",
        link: `${GLOBAL_PATH}/help`,
      },
    ];
    return data;
  },
  boards: () => {
    let data: Board[] = [
      {
        title: "Site",
        totalTasks: 0,
        board: {
          boardId: "IDB2637",
          quantityOfTeam: 0,
          date: new Date(),
          categories: [
            {
              title: "New",
              status: "new",
              color: "green",
              tasks: [
                {
                  title: "test",
                  description:
                    "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
                  workers: [
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                  ],
                  task: {
                    author: "Test",
                    priority: "high",
                    date: {
                      start: new Date(),
                      end: new Date(),
                    },
                    comments: null,
                  },
                },
              ],
            },
            {
              title: "New",
              status: "new",
              color: "green",
              tasks: [
                {
                  title: "test",
                  description:
                    "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
                  workers: [
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                  ],
                  task: {
                    author: "Test",
                    priority: "high",
                    date: {
                      start: new Date(),
                      end: new Date(),
                    },
                    comments: null,
                  },
                },
              ],
            },
            {
              title: "New",
              status: "new",
              color: "green",
              tasks: [
                {
                  title: "test",
                  description:
                    "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
                  workers: [
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                  ],
                  task: {
                    author: "Test",
                    priority: "high",
                    date: {
                      start: new Date(),
                      end: new Date(),
                    },
                    comments: null,
                  },
                },
              ],
            },
            {
              title: "New",
              status: "new",
              color: "green",
              tasks: [
                {
                  title: "test",
                  description:
                    "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
                  workers: [
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                  ],
                  task: {
                    author: "Test",
                    priority: "high",
                    date: {
                      start: new Date(),
                      end: new Date(),
                    },
                    comments: null,
                  },
                },
              ],
            },
            {
              title: "New",
              status: "new",
              color: "green",
              tasks: [
                {
                  title: "test",
                  description:
                    "Сделать плагин для отслеживания онлайн статуса у игроков на сервере.",
                  workers: [
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                    {
                      avatar: null,
                      name: "Maksym",
                      email: "mpolakov777@gmail.com",
                    },
                  ],
                  task: {
                    author: "Test",
                    priority: "high",
                    date: {
                      start: new Date(),
                      end: new Date(),
                    },
                    comments: null,
                  },
                },
              ],
            },
          ],
        },
      },
    ];

    return data;
  },
};

export const transformationCurrentPathname: TransformationCurrentPathnameType =
  {
    dashboard: "Dashboard",
    tasks: "Task manager",
    control: "Control",
  };
