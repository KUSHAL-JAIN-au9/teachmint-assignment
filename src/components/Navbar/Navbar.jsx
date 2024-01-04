import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { refreshWarehouses } from "../../redux/warehouses";

const Navbar = () => {
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {}, [refresh]);

  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 text-white">
      <div
        onClick={() => {
          setrefresh(!refresh);
          dispatchEvent(refreshWarehouses());
        }}
        className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4"
      >
        <Link to={"/"} className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            // onClick={() => history("/")}
          />
          <span
            // onClick={() => history("/")}
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            WareTradeHub
          </span>
        </Link>
        {/* <div className="flex md:order-2">
          <button
            type="button"
            data-modal-target="small-modal"
            data-modal-toggle="small-modal"
            className="text-white bg-gradient-to-r inline from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2 px-6 py-3.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Habit
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
