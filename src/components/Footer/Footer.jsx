import Logo from "../Logo";
import NewsLetter from "./NewsLetter";
import FindUs from "./FindUs";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <Logo />
        <NewsLetter />
        <span>&copy; All rights reserved</span>
        <FindUs />
      </footer>
    </>
  );
}

export default Footer;
