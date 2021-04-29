interface Props {
  accessLevel: "No Access" | "All Access" | "Restricted Access";
}

const AccessButton = ({ accessLevel }: Props): JSX.Element => {
  return (
    <div
      className={`min-w-full text-center px-4 py-1 rounded-full text-sm font-semibold ${
        accessLevel === "No Access"
          ? "bg-gray-300 border-2 border-gray-500 text-gray-600"
          : accessLevel === "Restricted Access"
          ? "bg-red-300 border-2 border-red-500 text-red-600"
          : "bg-green-300 border-2 border-green-500 text-green-600"
      }`}
    >
      {accessLevel}
    </div>
  );
};

export default AccessButton;
