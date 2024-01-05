import React from "react";
import DropdownList from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row flex-wrap  justify-between items-center p-3 ">
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
        className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2  "
      >
        Back
      </button>

      <DropdownList />
    </div>
  );
};

export default Header;
