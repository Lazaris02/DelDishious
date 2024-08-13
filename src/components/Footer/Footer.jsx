import Logo from "../Logo";
import NewsLetter from "./NewsLetter";
import FindUs from "./FindUs";
import PlaceIcon from "@mui/icons-material/Place";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>{<PlaceIcon />}123 Main Street, Anytown, ABC 45678</p>
        </div>

        <div className="flex flex-col">
          <NewsLetter
            input_class="rounded px-2 text-[#01796F] font-bold text-center mr-1"
            form_class="mt-8"
          />
          <span className="mt-auto self-center text-xl">
            &copy; All rights reserved
          </span>
        </div>
        <FindUs />
      </footer>
    </>
  );
}

export default Footer;
