import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img className="h-24" src={logo} alt="logo image" />
    </Link>
  );
}

export default Logo;
