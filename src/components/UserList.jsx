import React from "react";
import Man from "../assets/man.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = ({ user }) => {
  const { users, posts } = useSelector((state) => state.users);

  return (
    <li class="pb-3 sm:pb-4 hover:cursor-pointer hover:scale-105 ">
      <Link to={`${user.id}`} state={user}>
        <div class="flex items-center space-x-4 rtl:space-x-reverse border  rounded-xl p-5">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src={Man} alt="Neil image" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              Name :
              <p class=" ml-2 text-sm font-medium text-gray-900 truncate dark:text-white">
                {user?.name}
              </p>
            </div>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            Posts :
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {posts.filter((post) => post.userId === user?.id).length}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserList;
