import React, { useState } from "react";
import Warhouse from "../icons/warehouse.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeWarehouse } from "../redux/warehouses";
import { useDispatch } from "react-redux";
import { ToastSucess } from "../utils/Toast";

const WarehouseDetail = () => {
  const [Warehouse, setWarehouse] = useState({
    name: "Warehouse-165",
    code: "W-00001",
    id: 1,
    city: "Delhi",
    space_available: 1234,
    type: "Leasable Space",
    cluster: "cluster-a-32",
    is_registered: true,
    is_live: false,
  });

  const { state } = useLocation();
  const dispatch = useDispatch();
  const history = useNavigate();

  console.log("stsate", state.name);

  return (
    <div className="[w-100%] h-[90vh]  grid place-items-center">
      <div className="[w-800px] h-[30rem]  max-w-sm my-10 mx-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" w-full flex flex-col  items-center pb-10 px-4 pt-4">
          <div className="w-full flex row flex-nowrap justify-around items-center ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg mx-3"
              src={Warhouse}
              alt="Bonnie image"
            />
            <div>
              <span
                class={
                  state.is_registered
                    ? "habit-status-done-icon"
                    : "habit-status-notdone-icon"
                }
              >
                <strong className="font-bold text-slate-800">
                  Rigistration Status:
                </strong>
                <span
                  class={
                    state.is_registered
                      ? "habit-status-done"
                      : "habit-status-notdone"
                  }
                ></span>
                {state.is_registered ? "Registered" : "Unrigistered"}
              </span>

              <span
                class={
                  state?.is_live
                    ? "habit-status-done-icon"
                    : "habit-status-notdone-icon"
                }
              >
                <strong className="font-bold text-slate-800">
                  Availabiity Status:
                </strong>
                <span
                  class={
                    state?.is_live
                      ? "habit-status-done"
                      : "habit-status-notdone"
                  }
                ></span>
                {state.is_live ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
          <div className="w-full h-80 flex flex-col flex-nowrap justify-around ">
            <h5 className=" w-full mb-1 text-xl font-bold text-gray-900 dark:text-white">
              Name: {state?.name}
            </h5>
            {/* <span className="text-sm text-gray-500 dark:text-gray-400">
      {state.type}
    </span> */}
            <span class=" w-full flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <strong className="font-bold text-slate-800">City:</strong>
              <span class="flex w-2.5 h-2.5 ml-2 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
              {state?.city}
            </span>

            <span class=" w-full flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <strong className="font-bold text-slate-800">Cluster:</strong>
              <span class="flex w-2.5 h-2.5 ml-2 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
              {state?.cluster}
            </span>

            <span class=" w-full flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <strong className="font-bold text-slate-800">
                Warehouse Type:
              </strong>
              <span class="flex w-2.5 h-2.5 ml-2 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
              {state?.type}
            </span>

            <span class=" w-full flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <strong className="font-bold text-slate-800">
                Space Available:
              </strong>
              <span class="flex w-2.5 h-2.5 ml-2 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
              {state?.space_available}
            </span>

            {/* <span className=" w-full text-lg font-semibold text-black-500 dark:text-gray-400">
              Warehouse Code: {Warehouse.code}
            </span>
            <span className="text-lg font-semibold text-black-500 dark:text-gray-400">
              Space Available: {Warehouse.space_available}
            </span>
            <span className="text-lg font-semibold text-black-500 dark:text-gray-400">
              Cluster: {Warehouse.cluster}
            </span>
            <span className="text-lg font-semibold text-black-500 dark:text-gray-400">
              City: {Warehouse.city}
            </span> */}

            <Link
              to={`/edit/${state.id}`}
              state={state}
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Edit
            </Link>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeWarehouse(state?.id));
                ToastSucess("warehouse data deleted sucessfully");
                setTimeout(() => {
                  history("/");
                }, 2000);
              }}
              class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>

          {/* <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
      <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
      {Warehouse.is_registered ? "registered" : "not rigistered"}
    </span> */}
          {/* <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
      <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
      Unavailable
    </span> */}

          {/* <div className="flex mt-4 space-x-3 md:mt-6">
      <button
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={(e) => {
          e.preventDefault();
          //   dispatch(removeHabit(habit?.id));
          //   dispatch(refreshHabit());
          //   history("-1");
        }}
      >
        Delete
      </button>
    </div> */}

          {/* <!-- Main modal --> */}
          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
                {/* <!-- Modal footer --> */}
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetail;
