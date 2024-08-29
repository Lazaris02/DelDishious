import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Recipies from "../pages/Recipies/Recipes";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ContactUs from "../pages/ContactUs/ContactUs";
import RecipeSingle from "../pages/Recipies/RecipeSingle/RecipeSingle";
import ErrorPage from "../pages/Error/ErrorPage";

function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/notfound" element={<ErrorPage />} />
        <Route path="/recipies">
          <Route index element={<Recipies />} />
          <Route path=":id" element={<RecipeSingle />} />
        </Route>
      </Routes>
    </>
  );
}

export default NavRoutes;
