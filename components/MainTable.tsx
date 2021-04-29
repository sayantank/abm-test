import React from "react";
import { useTable } from "../contexts/TableContext";
import AllTeamTable from "./AllTeamTable";
import TeamTable from "./TeamTable";

const MainTable = (): JSX.Element => {
  const [state, dispatch] = useTable();

  React.useEffect(() => {
    console.log(state.currTeam);
  }, [state.currTeam]);
  // if (state.currTeam === null) {
  //   return <AllTeamTable />;
  // } else {
  //   return <TeamTable />;
  // }

  return (
    <div>
      <AllTeamTable />
      <TeamTable />
    </div>
  );
};

export default MainTable;
