import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo image" />
    </Link>
  );
}

export default Logo;
