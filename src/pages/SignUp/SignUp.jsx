import SignUpForm from "./SignUpForm";
import signup_img from "../../assets/signup_img.jpg";
import AlterLoginField from "../Login/AlterLoginField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function SignUp() {
  return (
    <div className="self-center mt-auto mb-auto w-3/4 bg-gray-200 p-4 rounded flex text-white">
      <div className="flex flex-col bg-[#01796F] p-2 rounded w-1/2 ">
        <SignUpForm />

        <p className="text-2xl font-semibold text-center">·OR·</p>

        <div className="flex flex-col  items-center p-2">
          <AlterLoginField
            text={"Google"}
            color_name={"bg-[#fe4066] hover:bg-red-700"}
            icon={<GoogleIcon fontSize="large" />}
          />
          <AlterLoginField
            text={"Facebook"}
            color_name={"bg-[#1877F2] hover:bg-blue-700"}
            icon={<FacebookIcon fontSize="large" />}
          />
        </div>
      </div>

      <div className="w-1/2 relative">
        <img src={signup_img} alt="signup_bg" className="h-full" />
        <p className="absolute bottom-0 right-2 z-10 bg-black rounded p-1">
          Already joined?
          <span className="text-[#FF7F50] text-lg font-semibold">Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
