import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <Logo />

        <ul className="middle-nav">
          <li>
            <Link to="/recipies">RECIPIES</Link>
          </li>
          <li>
            <Link to="/favorites">FAVORITES</Link>
          </li>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
        </ul>

        <ul className="log-sign">
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
