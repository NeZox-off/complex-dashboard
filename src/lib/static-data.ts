import { IconProps } from "../components/ui";

type AccountData = {
  title: string;
  link: string;
  icon: IconProps["name"];
}

type ContentData = {
  title: string;
  link: string;
  icon: IconProps["name"];
};

type NavigationData = {
  title: string;
  content?: ContentData[];
};

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
        link: "/dashboard/settings",
      },
      {
        title: "Help",
        icon: "CircleHelp",
        link: "/dashboard/help",
      },
    ];
    return data;
  },
};
