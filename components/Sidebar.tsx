import React from "react";

import { Layout, Briefcase, Shield } from "react-feather";
import NavItem from "./NavItem";

const navItems = [
  {
    icon: <Layout />,
    title: "Projects",
    active: false,
  },
  {
    icon: <Briefcase />,
    title: "Organisation Profile",
    active: false,
  },
  {
    icon: <Shield />,
    title: "Access Control",
    active: true,
  },
];

const Sidebar = (): JSX.Element => {
  return (
    <aside className="h-full w-60 py-4 px-2 flex flex-col space-y-6">
      <img
        src="mysite.svg"
        alt="Logo"
        style={{ width: "100%", height: "auto" }}
      />
      <ul className="flex flex-col w-full">
        {navItems.map((item, i) => (
          <NavItem {...item} key={i} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
