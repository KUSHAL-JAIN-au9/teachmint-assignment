import React, { useEffect, useState } from "react";
import Warhouse from "../icons/warehouse.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../components/Input/Input";

const HomePage = () => {
  const [searchItem, setsearchItem] = useState("");
  const [refresh, setrefresh] = useState(false);
  const [cityFilters, setCityFilters] = useState([]);
  const [clusterFilters, setClusterFilters] = useState([]);
  const [spaceFilters, setSpaceFilters] = useState([]);
  const warehouseState = useSelector((state) => state.warehouses);

  const [warehouses, setwarehouses] = useState([...warehouseState.warehouses]);

  useEffect(() => {
    const cityFilterOptions = warehouseState.warehouses.map((item) => {
      return item.city;
    });
    const clusterFilterOptions = warehouseState.warehouses.map((item) => {
      return item.cluster;
    });
    const spaceFilterOptions = warehouseState.warehouses.map((item) => {
      return item.space_available;
    });
    console.log("city filters", cityFilterOptions);
    console.log("space lhasfh filters", spaceFilterOptions);

    setCityFilters([...new Set(cityFilterOptions)]);
    setClusterFilters([...new Set(clusterFilterOptions)]);
    setSpaceFilters([...new Set(spaceFilterOptions)]);
  }, []);

  const handleSearch = (e) => {
    console.log(searchItem);

    const filteredState = warehouseState.warehouses?.filter(
      (item) => item.name.toLowerCase() === searchItem.toLowerCase()
    );
    console.log(filteredState);
    setwarehouses(filteredState);
    setrefresh(!refresh);
    setsearchItem("");
  };

  const handleChangeSearch = (e) => {
    setsearchItem(e.target.value);
  };

  console.log("warehouses", warehouseState);
  console.log("city filter after unque", cityFilters);
  return (
    <div className="w-full h-auto min-h-screen gap-y-1 gap-x-10   bg-lime-950 flex flex-row flex-wrap justify-around items-start ">
      <div className="w-full flex flex-row">
        <div className="w-1/2 h-20 flex flex-row justify-around items-center ">
          <Input
            type={"text"}
            placeholder={"search warehouse name"}
            // label={"warehouse name :"}
            id={"habit-title"}
            required={true}
            value={searchItem}
            //   editModalId={editModalId}
            onchange={handleChangeSearch}
          />
          <button
            type="submit"
            disabled={searchItem == ""}
            onClick={handleSearch}
            className={`w-48 h-11 mt-3 text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              searchItem == ""
                ? " disabled:opacity-50 "
                : "opacity-100  hover:bg-blue-800"
            }`}
          >
            Search
          </button>
        </div>

        <div className="w-3/4 flex flex-row justify-around items-center">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-white mt-3  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {" "}
            City Filters
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            class="z-10 hidden transform translate-x-581 translate-y-140 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {cityFilters.map((item) => {
                console.log("ijjjjjjjjjj", item);
                return (
                  <li
                    data-dropdown-toggle="dropdown"
                    onClick={() => {
                      const filter = warehouseState.warehouses.filter(
                        (ele) => ele.city === item
                      );
                      setwarehouses(filter);
                    }}
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            id="dropdownclusterbtn"
            data-dropdown-toggle="dropdown-cluster"
            class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {" "}
            Cluster Filters
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu cluster--> */}
          <div
            id="dropdown-cluster"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownclusterbtn"
            >
              {clusterFilters.map((item) => {
                console.log("ijjjjjjjjjj", item);
                return (
                  <li
                    data-dropdown-toggle="dropdown-cluster"
                    onClick={() => {
                      const filter = warehouseState.warehouses.filter(
                        (ele) => ele.cluster === item
                      );
                      setwarehouses(filter);
                    }}
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            id="dropdownspacebtn"
            data-dropdown-toggle="dropdown-space"
            class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {" "}
            Space Filters
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu cluster--> */}
          <div
            id="dropdown-space"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownspacebtn"
            >
              {spaceFilters.map((item) => {
                console.log("spacccccee", item);
                return (
                  <li
                    data-dropdown-toggle="dropdown-cluster"
                    onClick={() => {
                      const filter = warehouseState.warehouses.filter(
                        (ele) => ele.space_available === item
                      );
                      setwarehouses(filter);
                    }}
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {warehouses.length === 0 && (
        <h1 className="w-full  text-3xl text-center text-white font-semibold">
          {" "}
          No Warehouses Found ........
        </h1>
      )}
      {warehouses?.map((Warehouse, index) => (
        // <HabitCard
        //   habit={habit}
        //   key={habit?.id}
        //   setEditModalId={setEditModalId}
        // />
        // { const modal = new Modal($targetEl, options)}

        <Link to={`/${Warehouse.id}`} state={Warehouse}>
          <div
            key={Warehouse?.id}
            className="w-60 h-70 max-w-sm my-10 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className=" w-full flex flex-col items-center pb-10 px-4 pt-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={Warhouse}
                alt="Bonnie image"
              />

              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                {Warehouse?.name}
              </h5>

              {/* <span className="text-sm text-gray-500 dark:text-gray-400">
              {Warehouse.type}
            </span> */}
              <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
                {Warehouse.type}
              </span>
              <span className="text-lg font-semibold text-black-500 dark:text-gray-400">
                {Warehouse.city}
              </span>

              <span
                className={
                  Warehouse.is_registered
                    ? "habit-status-done-icon"
                    : "habit-status-notdone-icon"
                }
              >
                <span
                  className={
                    Warehouse.is_registered
                      ? "habit-status-done"
                      : "habit-status-notdone"
                  }
                ></span>
                {Warehouse.is_registered ? "Registered" : "not rigistered"}
              </span>

              <span
                className={
                  Warehouse.is_live
                    ? "habit-status-done-icon"
                    : "habit-status-notdone-icon"
                }
              >
                <span
                  className={
                    Warehouse.is_live
                      ? "habit-status-done"
                      : "habit-status-notdone"
                  }
                ></span>
                {Warehouse.is_live ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
