import React from "react";
import DropdownList from "./Dropdown";

const Header = () => {
  return (
    <div className="w-full">
      <button
        type="button"
        class="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
      >
        Back
      </button>

      <DropdownList />
    </div>
  );
};

export default Header;
