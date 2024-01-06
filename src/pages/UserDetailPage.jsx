import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import Header from "../components/header";
import { getData } from "../services/api";
import { BaseCountryURL, UserPostData } from "../services/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts, fetchCountries, filterUserPosts } from "../redux/users";
import ProfileListLayout from "../layout/ProfileListLayout";
import { truncateText } from "../utils/utils";
import Modal from "../layout/Modal";

const UserDetailPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedPost, setClickedPost] = useState({});
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const { countries, posts, userPosts } = useSelector((state) => state.users);

  // console.log(" redux countries", posts, userPosts);
  const {
    state: { address, company, email, name, username, phone, website, id },
  } = useLocation();
  console.log(address, company, username, email);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await getData(BaseCountryURL);
      const postData = await getData(UserPostData);

      console.log(postData);

      dispatch(fetchAllPosts(postData));
      dispatch(filterUserPosts({ id }));
      // console.log({ countries });
      dispatch(fetchCountries(countries));
    };
    fetchData();
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const leftProfileData = [
    { heading: "Name", value: name },
    { heading: "UserName", value: username },
    { heading: "Company Name", value: company.name },
    { heading: "Catch Phrase", value: company.catchPhrase },
  ];

  const rightProfileData = [
    {
      heading: "Address",
      value: ` ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`,
    },
    // { heading: "Street", value: address.street },
    { heading: "Email", value: email },
    { heading: "Phone", value: phone },
    { heading: "Website", value: website },
  ];

  const togglePopover = (post) => {
    setIsOpen(!isOpen);
    setClickedPost(post);
  };
  return (
    <div className="xl:w-full h-auto bg-gradient-to-br from-blue-300 to-purple-300 p-8  shadow-lg flex flex-col justify-around items-center">
      <Header countries={countries} />
      <div className="w-[80%]  h-auto -p-3 flex-col flex md:flex-row justify-between lg:items-center mt-5">
        <ProfileListLayout>
          {leftProfileData.map((item, i) => (
            <div key={i} class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                {item.heading}
              </dt>
              <dd class="text-lg font-semibold">{item.value}</dd>
            </div>
          ))}
        </ProfileListLayout>

        <ProfileListLayout>
          {rightProfileData.map((item, idx) => (
            <div key={idx} class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                {item.heading}
              </dt>
              <dd class="text-lg font-semibold">{item.value}</dd>
            </div>
          ))}
        </ProfileListLayout>
      </div>

      <div className="w-[80%]   flex sm:flex-col mt-4 lg:flex-row flex-wrap justify-between items-center gap-4 ">
        {userPosts.slice(0, 3).map((post) => (
          <div
            className="lg:w-80 min-h-12 text-gray-700 inset-0 bg-opacity-25 bg-white backdrop-blur-lg rounded-xl border-black grid place-items-center cursor-pointer "
            onClick={() => togglePopover(post)}
          >
            <div
              // href="#"
              class="block max-w-sm sm:max-w-md p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {truncateText(post?.title, 20)}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {`Post Title: ${truncateText(post?.body, 60)}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* modal to pop up when clicked */}
      {isOpen && <Modal clickedPost={clickedPost} modalRef={modalRef} />}
    </div>
  );
};

export default UserDetailPage;
