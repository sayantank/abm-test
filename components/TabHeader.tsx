import React from "react";

import { Wifi, Grid, RefreshCw } from "react-feather";
import TabItem from "./TabItem";

const tabs = [
  {
    icon: <Wifi />,
    title: "Permissions",
    active: true,
  },
  {
    icon: <Grid />,
    title: "Approval Matrix",
    active: false,
  },
];

const TabHeader = (): JSX.Element => {
  return (
    <div className="w-full h-20 flex items-center justify-between">
      <ul className="flex space-x-4">
        {tabs.map((tab, i) => (
          <TabItem {...tab} key={i} />
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <h3>Last synced</h3>
        <RefreshCw />
      </div>
    </div>
  );
};

export default TabHeader;
