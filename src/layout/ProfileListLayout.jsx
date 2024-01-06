import React from "react";

const ProfileListLayout = ({ children }) => {
  return (
    <div className="sm:w-1/2  h-full   mx-3 ">
      <dl class="max-w-md min-w-sm text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {children}
      </dl>
    </div>
  );
};

export default ProfileListLayout;
