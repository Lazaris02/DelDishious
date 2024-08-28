import AlterLoginField from "./AlterLoginField";
import login_signup from "../../assets/login_signup.avif";
import { Button } from "@mui/material";

function LoginForm() {
  return (
    <div className="w-3/4 flex  mt-10 mb-10 m-auto rounded bg-gray-100 p-8 text-white">
      <div className="w-1/2 bg-green-300">
        <form id="login">
          <h2 className="text-center">Join The Cooking Journey</h2>
          <div className="flex justify-center p-2">
            <label htmlFor="username">
              <img src="" alt="username" />
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="form-input-design"
            />
          </div>
          <div className="flex justify-center p-2">
            <label>
              <img src="" alt="password" />
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-input-design"
            />
          </div>
          <div className="flex justify-center p-2">
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
          </div>
          <div className="w-full flex justify-center">
            <Button variant="contained" style={{ backgroundColor: "#FF6F61" }}>
              Log in
            </Button>
          </div>

          <a href="" className="flex-1">
            Register now
          </a>
        </form>

        <hr />

        <div className="flex flex-col  items-center">
          <AlterLoginField text={"Google"} color_name={"bg-blue-400"} />
          <AlterLoginField text={"FaceBook"} color_name={""} />
        </div>
      </div>
      <img src={login_signup} alt="side_image" className="w-1/2" />
    </div>
  );
}

export default LoginForm;
