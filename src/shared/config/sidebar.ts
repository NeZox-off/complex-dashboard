import { ContentLinks, SidebarContent } from "@/shared/model";
import { GLOBAL_PATH } from ".";

const NAVIGATION_LINKS: SidebarContent[] = [
  {
    title: "Quick Access",
    content: [
      {
        title: "Dashboard",
        link: GLOBAL_PATH,
        icon: "House",
        asLink: true,
      },
      {
        title: "Task manager",
        link: `${GLOBAL_PATH}/task-manager`,
        icon: "ListTodo",
        asLink: true,
      },
      {
        title: "Administration",
        link: `${GLOBAL_PATH}/administration`,
        icon: "Settings2",
        asLink: true,
      },
    ],
  },
];

const SETTINGS_FEATURES: ContentLinks[] = [
  {
    title: "Add to panel",
    icon: "UserPlus",
    link: null,
    asLink: false,
  },
  {
    title: "Help",
    icon: "CircleHelp",
    link: `${GLOBAL_PATH}/help`,
    asLink: true,
  },
];

export { NAVIGATION_LINKS, SETTINGS_FEATURES };
