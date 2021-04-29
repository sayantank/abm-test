import { Dispatch, useReducer } from "react";

export interface Role {
  name: string;
  description: string;
  accessLevel: "No Access" | "All Access" | "Restricted Access";
  summary: string[];
  lastUpdated: number;
  active: boolean;
  switch: boolean;
}

export interface Team {
  name: string;
  accessLevel: "No Access" | "All Access" | "Restricted Access";
  members: number;
  lastUpdated: number;
  roles: Role[];
}

export interface State {
  currTeam: Team;
}

export interface Action {
  type: "TOGGLE_ROLE" | "TOGGLE_TABLE" | "TOGGLE_SWITCH";
  team?: Team;
  roleIdx?: number;
  teamIdx?: number;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_ROLE": {
      const rolesCopy = [...state.currTeam.roles];
      rolesCopy[action.roleIdx].active = !rolesCopy[action.roleIdx].active;
      return { ...state, currTeam: { ...state.currTeam, roles: rolesCopy } };
    }
    case "TOGGLE_TABLE": {
      if (state.currTeam !== null) {
        return { ...state, currTeam: null };
      } else {
        return { ...state, currTeam: teams[action.teamIdx] };
      }
    }
    case "TOGGLE_SWITCH": {
      const rolesCopy = [...state.currTeam.roles];
      rolesCopy[action.roleIdx].switch = !rolesCopy[action.roleIdx].switch;
      return { ...state, currTeam: { ...state.currTeam, roles: rolesCopy } };
    }
    default: {
      throw Error("Action not supported");
    }
  }
};

const useTableHook = (): [State, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, {
    currTeam: null,
  });

  return [state, dispatch];
};

export const teams: Team[] = [
  {
    name: "Management Team",
    accessLevel: "All Access",
    members: 4,
    lastUpdated: 1,
    roles: [
      {
        name: "Budget",
        description: "All aspects in the bidding module",
        accessLevel: "All Access",
        summary: ["Create", "Edit"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
      {
        name: "Billing",
        description: "All aspects in the bidding module",
        accessLevel: "Restricted Access",
        summary: ["Create", "Edit", "View", "Delete"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
      {
        name: "Organisational Access",
        description: "All aspects in the bidding module",
        accessLevel: "No Access",
        summary: ["Create", "Edit", "View", "Delete"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
    ],
  },
  {
    name: "Project Team",
    accessLevel: "No Access",
    members: 4,
    lastUpdated: 1,
    roles: [
      {
        name: "Budget",
        description: "All aspects in the bidding module",
        accessLevel: "All Access",
        summary: ["Create", "Edit"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
      {
        name: "Billing",
        description: "All aspects in the bidding module",
        accessLevel: "Restricted Access",
        summary: ["Create", "Edit", "View", "Delete"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
      {
        name: "Organisational Access",
        description: "All aspects in the bidding module",
        accessLevel: "No Access",
        summary: ["Create", "Edit", "View", "Delete"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
    ],
  },
  {
    name: "Procurement Team",
    accessLevel: "Restricted Access",
    members: 4,
    lastUpdated: 1,
    roles: [
      {
        name: "Budget",
        description: "All aspects in the bidding module",
        accessLevel: "All Access",
        summary: ["Create", "Edit"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
      {
        name: "Billing",
        description: "All aspects in the bidding module",
        accessLevel: "Restricted Access",
        summary: ["Create", "Edit", "View", "Delete"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
      {
        name: "Organisational Access",
        description: "All aspects in the bidding module",
        accessLevel: "No Access",
        summary: ["Create", "Edit", "View", "Delete"],
        lastUpdated: 1,
        active: false,
        switch: false,
      },
    ],
  },
];

export default useTableHook;
