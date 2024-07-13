import PersonProfile from "./PersonProfile";
import SubHeader from "../../components/SubHeader";
import lazaris from "../../assets/lazaris.webp";

const person1 = {
  personImg: lazaris,
  personName: "Thodoris Lazaris",
  personRole: "BCS - Software Developer",
  gitHubLink: "https://github.com/Lazaris02",
};

function Team() {
  return (
    <div>
      <SubHeader textContent="The Team" />
      <PersonProfile person={person1} />
    </div>
  );
}

export default Team;
