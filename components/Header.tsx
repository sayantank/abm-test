import React from "react";

import { HelpCircle, Bell } from "react-feather";

const Header = (): JSX.Element => {
  return (
    <div className="w-full h-20 flex justify-end items-center space-x-8 py-2">
      <div className="bg-gray-300 h-10 w-10 rounded-full" />
      <p className="text-lg font-semibold text-gray-800">Kishore</p>
      <Bell className="text-gray-500 cursor-pointer" />
      <HelpCircle className="text-gray-500 cursor-pointer" />
    </div>
  );
};

export default Header;
