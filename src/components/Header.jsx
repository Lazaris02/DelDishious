import NavBar from "../components/NavBar";
import PageTitle from "./PageTitle";

function Header({ pageTitle }) {
  return (
    <header>
      <NavBar />
      <PageTitle title={pageTitle} />
    </header>
  );
}

export default Header;
