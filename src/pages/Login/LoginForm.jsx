import AlterLoginField from "./AlterLoginField";
import login_signup from "../../assets/login_signup.avif";
function LoginForm() {
  return (
    <div className="w-3/4 flex  mt-10 mb-10 m-auto rounded bg-gray-100 p-8">
      <div className="w-1/2 bg-green-300">
        <form id="login">
          <div className="flex">
            <label htmlFor="username">
              <img src="" alt="username" />
            </label>
            <input type="text" placeholder="Username" id="username" />
          </div>
          <div className="flex">
            <label>
              <img src="" alt="password" />
            </label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="flex">
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
          </div>
          <button>Log in</button>
          <a href="">Register now</a>
        </form>

        <hr />

        <div className="flex flex-col  items-center">
          <AlterLoginField text={"Google"} color_name={"bg-blue-400"} />
          <AlterLoginField text={"FaceBook"} color_name={""} />
          <AlterLoginField text={"Twitter"} />
        </div>
      </div>
      <img src={login_signup} alt="side_image" className="w-1/2" />
    </div>
  );
}

export default LoginForm;
