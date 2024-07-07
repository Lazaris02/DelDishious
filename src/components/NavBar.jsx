import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <>
      <nav>
        <Logo />
        <ul>
          <li>
            <Link to="/recipies">Recipies</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
