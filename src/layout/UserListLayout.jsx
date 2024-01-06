import React from "react";

const UserListLayout = ({ children }) => {
  return (
    <div className="w-[100%] h-auto  grid place-items-center mt-10 ">
      <ul className=" xl:w-[40%] lg:w-[60%]   divide-gray-200 dark:divide-gray-700  ">
        {children}
      </ul>
    </div>
  );
};

export default UserListLayout;
