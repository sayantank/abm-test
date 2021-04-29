const TableHeader = (): JSX.Element => {
  return (
    <div className="w-full flex bg-gray-100 py-4">
      <div className="w-12 flex items-center justify-center" />
      <div className="flex-1 flex items-center justify-center text-gray-800 font-semibold">
        Department Role/Name
      </div>
      <div className="flex-1 flex items-center justify-center text-gray-800 font-semibold">
        Access Level
      </div>
      <div className="flex-1 flex items-center justify-center text-gray-800 font-semibold">
        No. of members
      </div>
      <div className="flex-1 flex items-center justify-center text-gray-800 font-semibold">
        Last Updated
      </div>
      <div className="w-20 flex items-center justify-center" />
    </div>
  );
};

export default TableHeader;
