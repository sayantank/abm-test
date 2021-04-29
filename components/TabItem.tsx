import React from "react";

interface Props {
  title: string;
  icon: JSX.Element;
  active: boolean;
}

const TabItem = ({ title, icon, active }: Props): JSX.Element => {
  return (
    <li
      className={`flex items-center p-4 relative cursor-pointer ${
        active ? "text-purple-500" : "text-gray-500"
      }`}
    >
      <div className="mr-2">{icon}</div>
      <p className={`${active ? "font-semibold" : ""}`}>{title}</p>
      <div
        className={`${
          active ? "block" : "hidden"
        } absolute w-full h-1 bg-purple-500 bottom-0 left-0`}
      />
    </li>
  );
};

export default TabItem;
