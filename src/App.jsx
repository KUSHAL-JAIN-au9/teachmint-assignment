import "./App.css";
import { Route, Routes } from "react-router-dom";
import DirectoryPage from "./pages/DirectoryPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <div className="[w-100%]">
      <Routes>
        <Route exact path="/" element={<DirectoryPage />} />
        <Route exact path="/:userid" element={<UserDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
