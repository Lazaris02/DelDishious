import GitHubIcon from "@mui/icons-material/GitHub";

function PersonProfile({ person }) {
  const { personImg, personName, personRole, gitHubLink } = person;
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={personImg}
        alt="team_member_1"
        className="text-3xl rounded-full mt-4 mb-4"
      />
      <h3 className="bg-text-combo rounded-lg p-2 mb-2 text-2xl">
        {personName}
      </h3>
      <p className="bg-text-combo rounded-lg p-2 text-lg">{personRole}</p>
      <a href={gitHubLink} className="mt-4 flex flex-col items-center">
        <GitHubIcon
          className="rounded-full p-1 mr-1"
          style={{ color: "white", background: "#01796F" }}
          fontSize="large"
        />
        <span className="text-[#01796F] text-xl">Profile</span>
      </a>
    </div>
  );
}

export default PersonProfile;
