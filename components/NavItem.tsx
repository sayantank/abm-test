import React from "react";

interface Props {
  title: string;
  icon: JSX.Element;
  active: boolean;
}

const NavItem = ({ title, icon, active }: Props): JSX.Element => {
  return (
    <li
      className={`w-full relative flex p-4 items-center space-x-2 cursor-pointer ${
        active ? "text-purple-500 bg-purple-100" : "text-gray-500"
      }`}
    >
      <div
        className={`w-2 bg-purple-500 h-full ${
          active ? "block" : "hidden"
        } absolute left-0 top-0`}
      />
      <div className="text-xl">{icon}</div>
      <p className={`${active ? "font-bold" : "font-medium"}`}>{title}</p>
    </li>
  );
};

export default NavItem;
