import PageTitle from "../../components/PageTitle";
import Usp from "./Usp";
import Mission from "./Mission";
import Team from "./Team";

function AboutUs() {
  return (
    <>
      <PageTitle title="Welcome to DelDishious!" />
      <Mission />
      <Usp />
      <Team />
    </>
  );
}

export default AboutUs;
