import React, { useState } from "react";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editWarehouse } from "../redux/warehouses";
import { ToastSucess } from "../utils/Toast";

const EditWarehouse = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const history = useNavigate();

  const [cluster, setcluster] = useState(state.cluster || "");
  const [name, setname] = useState(state.name || "");
  const [space, setspace] = useState(state.space_available || "");
  const [city, setcity] = useState(state.city || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: state.id,
      name: name,
      space_available: space,
      cluster: cluster,
      city: city,
      code: state.code,
      is_registered: state.is_registered,
      is_live: state.is_live,
      type: state.type,
    };

    dispatch(editWarehouse(payload));
    ToastSucess("warehouse data edited sucessfully !");
    setTimeout(() => {
      history("/");
    }, 2000);
  };

  const handleChangeCluster = (e) => {
    setcluster(e.target.value);
  };
  const handleChangeName = (e) => {
    setname(e.target.value);
  };
  const handleChangeSpace = (e) => {
    setspace(e.target.value);
  };
  const handleChangeCity = (e) => {
    setcity(e.target.value);
  };

  console.log("state", state);
  return (
    <div className="w-full h-[30rem] grid place-items-center ">
      <h1 className="text-2xl font-bold text-white">Edit Warehouse</h1>
      <Form>
        <Input
          type={"text"}
          placeholder={"edit  cluster"}
          label={"warehouse cluster :"}
          id={"habit-title"}
          required={true}
          value={cluster}
          //   editModalId={editModalId}
          onchange={handleChangeCluster}
        />
        <Input
          type={"text"}
          placeholder={"edit warehouse name"}
          label={"warehouse name :"}
          id={"habit-title"}
          required={true}
          value={name}
          //   editModalId={editModalId}
          onchange={handleChangeName}
        />
        <Input
          type={"number"}
          placeholder={"edit  space available"}
          label={"warehouse space :"}
          id={"habit-title"}
          required={true}
          value={space}
          //   editModalId={editModalId}
          onchange={handleChangeSpace}
        />
        <Input
          type={"text"}
          placeholder={"edit city"}
          label={"city :"}
          id={"habit-title"}
          required={true}
          value={city}
          //   editModalId={editModalId}
          onchange={handleChangeCity}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className=" w-64 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit details
        </button>
      </Form>
    </div>
  );
};

export default EditWarehouse;
