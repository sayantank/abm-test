import { Plus, Edit2, Trash } from "react-feather";
import { Team, teams } from "../hooks/useTable";
import { useTable } from "../contexts/TableContext";
import TableHeader from "./TableHeader";
import TeamRow from "./TeamRow";

const AllTeamTable = (): JSX.Element => {
  const [state, dispatch] = useTable();
  return (
    <div className={`${state.currTeam ? "hidden" : "block"}`}>
      <div className="flex items-center space-x-8 text-gray-400">
        <button className="px-8 py-2 bg-purple-500 flex items-center space-x-2 text-white rounded-md hover:bg-purple-600 transition-colors">
          <Plus />
          <p>Add Role</p>
        </button>
        <Edit2 />
        <Trash />
      </div>
      <div>
        <TableHeader />
        {teams.map((team, i) => (
          <TeamRow team={team} idx={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AllTeamTable;
