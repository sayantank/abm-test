import { Eye } from "react-feather";
import { Team } from "../hooks/useTable";
import { useTable } from "../contexts/TableContext";
import AccessButton from "./AccessButton";

interface Props {
  team: Team;
  idx: number;
}

const TeamRow = ({ team, idx }: Props): JSX.Element => {
  const [state, dispatch] = useTable();

  const toggleTable = () => {
    console.log(idx);
    dispatch({ type: "TOGGLE_TABLE", teamIdx: idx });
  };
  return (
    <div className="w-full flex py-4">
      <div className="w-12 flex items-center justify-center" />
      <div className=" flex-1 flex items-center justify-center">
        <p
          onClick={toggleTable}
          className="text-gray-700 text-sm font-medium cursor-pointer transition-all"
        >
          {team.name}
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center text-sm text-gray-700">
        <div className="w-3/5">
          <AccessButton accessLevel={team.accessLevel} />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center text-sm text-gray-700">
        {team.members}
      </div>
      <div className="flex-1 flex items-center justify-center text-sm text-gray-700">
        {team.lastUpdated} mins ago
      </div>
      <div className="w-20 flex items-center justify-center">
        <Eye className="text-gray-300" />
      </div>
    </div>
  );
};

export default TeamRow;
