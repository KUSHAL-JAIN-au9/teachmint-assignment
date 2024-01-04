import React, { useEffect } from "react";
import UserList from "../components/UserList";
import UserListLayout from "../layout/UserListLayout";
import { getData } from "../services/api";
import { UserListData, UserPostData } from "../services/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchAllPosts, fetchAllUsers } from "../redux/users";

const DirectoryPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { users, posts } = useSelector((state) => state.users);
  console.log(
    "redux data============================================>",
    users,
    posts
  );
  useEffect(() => {
    const fechData = async () => {
      const userData = await getData(UserListData);
      const postData = await getData(UserPostData);

      console.log({ userData, postData });
      dispatch(fetchAllUsers(userData));
      dispatch(fetchAllPosts(postData));
    };
    fechData();
  }, []);

  return (
    <div className="w-full h-auto bg-lime-500 grid  place-items-center">
      <h1 className="w-full text-center text-4xl font-bold"> Directory</h1>
      <UserListLayout>
        {users.map((user) => (
          <UserList key={user?.id} user={user} />
        ))}
      </UserListLayout>
    </div>
  );
};

export default DirectoryPage;
