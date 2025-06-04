import { RoleType } from "../model";

const DASHBOARD_PERMISSIONS = {
  createTask: {
    title: "Creating tasks",
    description: "Allows the user to create new tasks on the board.",
  },
  updateTask: {
    title: "Editing tasks",
    description:
      "Allows you to change the title, description, and status of existing tasks.",
  },
  deleteTask: {
    title: "Deleting tasks",
    description: "Allows you to completely delete tasks from a project.",
  },
  createRole: {
    title: "Creating roles",
    description: "Allows you to add new roles and set access rights.",
  },
  updateRole: {
    title: "Editing roles",
    description: "Allows you to modify existing roles and their settings.",
  },
  deleteRole: {
    title: "Deleting roles",
    description:
      "Gives the right to delete roles from the user management system.",
  },
};

const PEOPLE_PERMISSIONS = {
  addPeople: {
    title: "Adding users",
    description: "Allows inviting new participants to the panel.",
  },
  deletePeople: {
    title: "Deleting users",
    description: "Allows you to remove participants from the panel.",
  },
  updateRole: {
    title: "Editing users",
    description:
      "Allows you to change information about users, roles, and their permissions.",
  },
};

const INITIAL_DATA = {
  dashboard: {
    createTask: {
      ...DASHBOARD_PERMISSIONS.createTask,
      checked: false,
    },
    updateTask: {
      ...DASHBOARD_PERMISSIONS.updateTask,
      checked: false,
    },
    deleteTask: {
      ...DASHBOARD_PERMISSIONS.deleteRole,
      checked: false,
    },
    createRole: {
      ...DASHBOARD_PERMISSIONS.createRole,
      checked: false,
    },
    updateRole: {
      ...DASHBOARD_PERMISSIONS.updateRole,
      checked: false,
    },
    deleteRole: {
      ...DASHBOARD_PERMISSIONS.deleteRole,
      checked: false,
    },
  },
  people: {
    addPeople: {
      ...PEOPLE_PERMISSIONS.addPeople,
      checked: false,
    },
    updatePeople: {
      ...PEOPLE_PERMISSIONS.updateRole,
      checked: false,
    },
    deletePeople: {
      ...PEOPLE_PERMISSIONS.deletePeople,
      checked: false,
    },
  },
};

const TEST_ROLES: RoleType[] = [
  {
    title: "Admin",
    color: "ff0000",
    permissions: {
      ...INITIAL_DATA,
    },
  },
  {
    title: "User",
    color: "fff",
    permissions: {
      ...INITIAL_DATA,
    },
  },
];

export { TEST_ROLES };
