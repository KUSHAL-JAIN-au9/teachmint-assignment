import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Header from "../components/header";
import { getData } from "../services/api";
import { BaseCountryURL, UserPostData } from "../services/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts, fetchCountries, filterUserPosts } from "../redux/users";
import ProfileListLayout from "../layout/ProfileListLayout";

const UserDetailPage = () => {
  const dispatch = useDispatch();
  const { countries, posts, userPosts } = useSelector((state) => state.users);

  console.log(" redux countries", posts, userPosts);
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
  return (
    <div className="w-full h-[110vh] bg-gradient-to-br from-blue-300 to-purple-300 p-8  shadow-lg flex flex-col justify-around items-center">
      <Header countries={countries} />
      <div className="w-[80%] h-auto -p-3 flex flex-row justify-between items-center mt-5">
        <ProfileListLayout>
          {leftProfileData.map((item, i) => (
            <div key={i} class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                {item.heading}
              </dt>
              <dd class="text-lg font-semibold">{item.value}</dd>
            </div>
          ))}
          {/* <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Email address
            </dt>
            <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
          </div> */}
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

        {/* <div className="w-1/2 h-full bg-red-800 mx-3">
          <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Email address
              </dt>
              <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
            </div>
            <div class="flex flex-col py-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Home address
              </dt>
              <dd class="text-lg font-semibold">
                92 Miles Drive, Newark, NJ 07103, California, USA
              </dd>
            </div>
            <div class="flex flex-col pt-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Phone number
              </dt>
              <dd class="text-lg font-semibold">
                +00 123 456 789 / +12 345 678
              </dd>
            </div>
          </dl>
        </div>
        <div className="w-1/2 h-full bg-yellow-500 mx-3 ">
          <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Email address
              </dt>
              <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
            </div>
            <div class="flex flex-col py-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Home address
              </dt>
              <dd class="text-lg font-semibold">
                92 Miles Drive, Newark, NJ 07103, California, USA
              </dd>
            </div>
            <div class="flex flex-col pt-3">
              <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Phone number
              </dt>
              <dd class="text-lg font-semibold">
                +00 123 456 789 / +12 345 678
              </dd>
            </div>
          </dl>
        </div> */}
      </div>
      <div className="w-[80%]  flex flex-row flex-wrap justify-between items-center ">
        {userPosts.slice(0, 3).map((post) => (
          <div className="w-52 h-52 text-gray-700 inset-0 bg-opacity-25 bg-white backdrop-blur-lg rounded-xl border-black grid place-items-center ">{`Post Title: ${post?.title}`}</div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailPage;
