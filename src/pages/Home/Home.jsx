import PageTitle from "../../components/PageTitle";
import InitialText from "./InitialText";
import Featured from "./Featured";
PageTitle;

function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <InitialText />
      <Featured window={2} />
    </>
  );
}

export default Home;
