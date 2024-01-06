import React from "react";

const ProfileListLayout = ({ children }) => {
  return (
    <div className="sm:w-1/2  h-full   mx-3 ">
      <dl class="max-w-md min-w-sm text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {/* <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Email address
          </dt>
          <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
        </div> */}
        {children}
      </dl>
    </div>
  );
};

export default ProfileListLayout;
