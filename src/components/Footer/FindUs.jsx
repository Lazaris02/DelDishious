import insta_logo from "../../assets/Instagram.png";
import github_logo from "../../assets/GitHub.png";
import youtube_logo from "../../assets/YouTube.png";

function FindUs() {
  return (
    <div>
      <ul className="">
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
