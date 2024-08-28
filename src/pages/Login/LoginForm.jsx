import AlterLoginField from "./AlterLoginField";
function LoginForm() {
  return (
    <div className="w-3/4 flex p-5 bg-red-500 p-4 m-auto">
      <div className="w-1/2">
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

        <div>
          <AlterLoginField text={"Google"} />
          <AlterLoginField text={"FaceBook"} />
          <AlterLoginField text={"Twitter"} />
        </div>
      </div>
      <img src="" alt="side_image" />
    </div>
  );
}

export default LoginForm;
