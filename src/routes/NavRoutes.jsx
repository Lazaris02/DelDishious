import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Recipies from "../pages/Recipies/Recipes";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<SignUp />} />
        <Route path="/contactus" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default NavRoutes;
