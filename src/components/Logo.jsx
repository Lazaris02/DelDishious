import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo image" />
      </Link>
    </div>
  );
}

export default Logo;
