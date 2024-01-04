import React from "react";

const UserListLayout = ({ children }) => {
  return (
    <div className="w-[80%] h-auto  grid place-items-center mt-10 ">
      <ul class=" w-[40%]   divide-gray-200 dark:divide-gray-700  ">
        {children}
      </ul>
    </div>
  );
};

export default UserListLayout;
