import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../services/api";
import { BaseCountryURL } from "../services/constants";

let timerId = null;
const DropdownList = () => {
  const [isPause, setIsPause] = useState(false);
  const [countrydata, setCountrydata] = useState({});
  const [countryTimer, setCountryTimer] = useState("00:00:00");
  const [countryName, setcountryName] = useState("");

  const { countries } = useSelector((state) => state.users);

  const handleSelectChange = async (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    // setSelectedOption(selectedValue);
    setcountryName(selectedValue);

    const response = await getData(`${BaseCountryURL}/${selectedValue}`);
    setCountrydata(response);

    const time = response.datetime.slice(11, 19);
    console.log(time);

    setCountryTimer(time);
  };

  return (
    <div className="md:w-2/3 lg:1/2  flex flex-row  justify-between items-center  ">
      {/* <label htmlFor="cars">Choose an option:</label> */}
      <select
        id="countries"
        name="countries"
        value={countryName}
        // onSelect={console.log("hiiii")}
        onChange={handleSelectChange}
        className=" w-52 p-3 me-2  text-lg bg-gray-600 text-white hover:bg-slate-700 rounded-lg"
      >
        <option
          className="sm:w-52 max-w-4"
          value=""
          disabled
          defaultValue
          hidden
        >
          Select a country
        </option>
        {countries.map((country, i) => (
          <option key={i} className="!max-w-4" value={country}>
            {country}
          </option>
        ))}
      </select>

      <button type="button" className="btn-timer bg-gradient-to-r ">
        {countryTimer}
      </button>

      <button
        type="button"
        className={
          isPause ? "btn-pause bg-gradient-to-r" : "btn-start bg-gradient-to-r "
        }
        onClick={() => {
          let [hours, minutes, seconds] = countryTimer.split(":");
          console.log(hours, minutes, seconds);
          console.log(isPause);

          if (!isPause) {
            if (!timerId) {
              console.log("Timer started");

              timerId = setInterval(() => {
                console.log("isPauselahdhlald", isPause);
                seconds++;
                if (seconds === 60) {
                  seconds = 0;
                  minutes++;
                  if (minutes === 60) {
                    minutes = 0;
                    hours++;
                  }
                }
                console.log(
                  `${hours.toString().padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
                );
                // console.log(isPause, timerId);
                setCountryTimer(
                  `${hours.toString().padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
                );
              }, 1000);
            }
          } else {
            clearInterval(timerId);
            timerId = null;
          }

          setIsPause(!isPause);
        }}
      >
        {isPause ? "Pause" : "Start"}
      </button>
    </div>
  );
};
export default DropdownList;
