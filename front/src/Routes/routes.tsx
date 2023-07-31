import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const Router = () => {
  return (
    <div className="div-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
