import AlterLoginField from "./AlterLoginField";
import login_signup from "../../assets/login_signup.avif";
import { Button } from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import Person2Icon from '@mui/icons-material/Person2';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function LoginForm() {
  return (
    <div className="w-3/4 flex mt-10 mb-10 m-auto rounded bg-gray-100 p-8 text-white">
      <div className="w-1/2 bg-[#01796F] flex flex-col space-y-4 flex-wrap-reverse">
        <form id="login" className="flex flex-col space-y-4">
          <h2 className="text-center font-bold text-3xl p-2">Join The Cooking Journey</h2>
          <div className="flex justify-center items-center p-2">
            <label htmlFor="username">
              <Person2Icon fontSize="large"/>
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="form-input-design"
            />
          </div>
          <div className="flex justify-center items-center p-2">
            <label htmlFor="password">
              <KeyIcon fontSize="large"/>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-input-design"
              id="password"
            />
          </div>
          <div className="flex justify-center p-2">
            <input type="checkbox" id="remember_me" className="p-1 w-6 h-6 mr-1 rounded-full" />
            <label htmlFor="remember_me" className="text-sm font-light mt-auto mb-auto">Remember me</label>
          </div>
          <div className="w-full flex justify-center">
            <Button variant="contained" style={{ backgroundColor: "#FF7F50" , fontSize : "large" , color : "white", fontWeight : "bold" }}>
              Login
            </Button>
          </div>
          <span className="flex-1 p-2 ml-auto mr-2 font-semibold text-lg">
          <a href="" className="hover:text-teal-400 text-teal-200">
            Register now
          </a>
          </span>
        </form>
       
        <p className="text-2xl font-semibold text-center">·OR·</p>
  
        <div className="flex flex-col  items-center p-2">
          <AlterLoginField text={"Google"} color_name={"bg-[#fe4066] hover:bg-red-700"} icon={<GoogleIcon fontSize="large"/>} />
          <AlterLoginField text={"Facebook"} color_name={"bg-[#1877F2] hover:bg-blue-700"} icon={<FacebookIcon fontSize="large"/>}/>
        </div>
      </div>
      <img src={login_signup} alt="side_image" className="w-1/2" />
    </div>
  );
}

export default LoginForm;
