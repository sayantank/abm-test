import { ArrowLeft, Edit2 } from "react-feather";
import { useTable } from "../contexts/TableContext";
import RoleRow from "./RoleRow";
import TableHeader from "./TableHeader";

const TeamTable = (): JSX.Element => {
  const [state, dispatch] = useTable();

  const toggleTable = () => {
    dispatch({ type: "TOGGLE_TABLE" });
  };

  return (
    <div className={`${state.currTeam ? "block" : "hidden"}`}>
      <div className="flex items-center space-x-8">
        <ArrowLeft
          className="text-gray-400 cursor-pointer"
          onClick={toggleTable}
        />
        <h2 className="font-medium text-gray-800">{state.currTeam?.name}</h2>
        <Edit2 className="text-gray-400" />
      </div>
      <div className="flex">
        <div className="px-4 py-4 relative text-purple-500 text-sm font-semibold">
          <p>Access Control</p>
          <div className="w-full absolute bottom-0 left-0 h-1 bg-purple-500" />
        </div>
        <div className="px-6 py-4 relative text-gray-400 text-sm font-medium">
          <p>Assigned Members</p>
        </div>
      </div>
      <div>
        <TableHeader />
        {state.currTeam?.roles?.map((role, i) => (
          <RoleRow role={role} idx={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TeamTable;
