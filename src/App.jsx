import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WarehouseDetail from "./pages/WarehouseDetail";
import { Modal } from "flowbite";
import ModalLayout from "./layout/Modal";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import EditWarehouse from "./pages/EditWarehouse";
import DirectoryPage from "./pages/DirectoryPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <div className="[w-100%]">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<DirectoryPage />} />
        <Route exact path="/:userid" element={<UserDetailPage />} />
        {/* <Route exact path="/:warehouseid" element={<WarehouseDetail />} />
        <Route exact path="/edit/:warehouseid" element={<EditWarehouse />} /> */}
      </Routes>
    </div>
  );
}

export default App;
