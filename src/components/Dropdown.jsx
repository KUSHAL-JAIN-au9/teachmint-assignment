import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSelector } from "react-redux";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const DropdownList = () => {
  const { countries } = useSelector((state) => state.users);
  console.log("DropdownList", countries);
  // <Dropdown
  //   menu={{
  //     items,
  //   }}
  //   trigger={["click"]}
  //   type="primary"

  // >
  //   <a onClick={(e) => e.preventDefault()}>
  //     <Space  >
  //       Click me
  //       <DownOutlined />
  //     </Space>
  //   </a>
  // </Dropdown>
  return (
    <div>
      {/* <label htmlFor="cars">Choose an option:</label> */}
      <select
        id="countries"
        name="countries"
        className="p-3 bg-gray-600 text-white hover:bg-slate-800 rounded-xl"
      >
        <option value="" disabled selected hidden>
          Select a country
        </option>
        {countries.map((country) => (
          <option value={country}>{country}</option>
        ))}

        {/* <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option> */}
      </select>
    </div>
  );
};
export default DropdownList;
