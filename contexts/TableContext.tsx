import { createContext, Dispatch, useContext } from "react";
import useTableHook, { State, Action } from "../hooks/useTable";

const TableContext = createContext(null);

export const TableProvider = ({ children }) => {
  const [state, dispatch] = useTableHook();
  return (
    <TableContext.Provider value={[state, dispatch]}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
