import insta_logo from "../../assets/Instagram.png";
import github_logo from "../../assets/GitHub.png";
import youtube_logo from "../../assets/YouTube.png";

function FindUs() {
  return (
    <div className="flex flex-col gap-y-2  flex-1 items-end">
      <h2 className="text-2xl  p-4">Social Media</h2>
      <ul className="flex gap-x-2 px-2 ">
        <li>
          <a href="">
            <img src={insta_logo} alt="instagram logo" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={github_logo} alt="github logo" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={youtube_logo} alt="youtube logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FindUs;
