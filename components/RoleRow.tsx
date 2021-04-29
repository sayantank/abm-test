import { Eye, MinusCircle, PlusCircle } from "react-feather";
import Switch from "react-switch";
import { Role } from "../hooks/useTable";
import { useTable } from "../contexts/TableContext";
import AccessButton from "./AccessButton";

interface Props {
  role: Role;
  idx: number;
}

const RoleRow = ({ role, idx }: Props): JSX.Element => {
  const [state, dispatch] = useTable();

  const toggle = () => {
    dispatch({ type: "TOGGLE_ROLE", roleIdx: idx });
  };

  const toggleSwitch = () => {
    dispatch({ type: "TOGGLE_SWITCH", roleIdx: idx });
  };

  return (
    <div className="">
      <div className="w-full flex py-4">
        <div className="w-12 flex items-center justify-center text-gray-300">
          {role.active ? (
            <MinusCircle onClick={toggle} className="cursor-pointer" />
          ) : (
            <PlusCircle onClick={toggle} className="cursor-pointer" />
          )}
        </div>
        <div className="flex-1 flex items-center justify-center text-sm text-gray-700">
          {role.name}
        </div>
        <div className="flex-1 flex items-center justify-center text-sm text-gray-700">
          <div className="w-3/5">
            <AccessButton accessLevel={role.accessLevel} />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center space-x-2 text-sm text-gray-700">
          {role.summary.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center text-sm text-gray-700">
          {role.lastUpdated} mins ago
        </div>
        <div className="w-20 flex items-center justify-center">
          <Switch onChange={toggleSwitch} checked={role.switch} />
        </div>
      </div>
      <div
        className={`${
          role.active ? "block" : "hidden"
        } flex flex-col space-y-3 transition-all`}
      >
        <p className="text-sm text-gray-500">{role.description}</p>
        <div className="w-full flex">
          <div className="mx-20 flex flex-col space-y-3">
            <p className="text-lg text-gray-800 font-semibold">
              Access Control
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="all_access"
                name="access_level"
                value="All Access"
              />
              <label className="flex flex-col" htmlFor="id_access">
                <h4 className="font-medium text-gray-800">All access</h4>
                <p className="text-sm text-gray-400">Can access all items</p>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="all_access"
                name="access_level"
                value="All Access"
              />
              <label className="flex flex-col" htmlFor="id_access">
                <h4 className="font-medium text-gray-800">All access</h4>
                <p className="text-sm text-gray-400">Can access all items</p>
              </label>
            </div>
          </div>
          <div className="w-1 bg-gray-200 h-auto" />
          <div className="mx-20 flex flex-col space-y-3">
            <p className="text-lg text-gray-800 font-semibold">Permissions</p>
            <div className="flex items-center space-x-4">
              <input type="checkbox" id="view" name="view" value="View" />
              <label htmlFor="view" className="text-gray-800 font-medium">
                View items in access
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <input type="checkbox" id="view" name="view" value="View" />
              <label htmlFor="view" className="text-gray-800 font-medium">
                Edit items in access
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <input type="checkbox" id="view" name="view" value="View" />
              <label htmlFor="view" className="text-gray-800 font-medium">
                Create items in access
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <input type="checkbox" id="view" name="view" value="View" />
              <label htmlFor="view" className="text-gray-800 font-medium">
                Delete items in access
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleRow;
