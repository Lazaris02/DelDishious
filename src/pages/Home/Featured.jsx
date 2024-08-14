import SubHeader from "../../components/SubHeader";
import { useEffect, useState } from "react";
import { transformRecipes } from "../../utils/utilities";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RecipeContainer from "../Recipies/RecipeContainer";
import { v4 as uuidv4 } from "uuid";

function Featured({ window }) {
  const min = 0;
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [displayFrom, setDisplayFrom] = useState(min);
  const [displayTo, setDisplayTo] = useState(window);
  const [max , setMax] = useState(0)

  const leftButtonUpdate = () => {
    if (displayFrom <= min) {
      return;
    }

    setDisplayFrom((c) => c - 1);
    setDisplayTo((c) => c - 1);

    console.log(displayFrom, displayTo,max);

  };

  const rightButtonUpdate = () => {
    if (displayTo >= max) {
      return;
    }

    setDisplayFrom((c) => c + 1);
    setDisplayTo((c) => c + 1);
    console.log(displayFrom, displayTo,max);
  };

  useEffect(() => {
    const fetchFeatured = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const data = await response.json();

      setFeaturedRecipes(transformRecipes(data["meals"]));
      setMax(data["meals"].length);
      console.log(displayFrom, displayTo,max);
  
    };
    fetchFeatured();
  }, []);
  return (
    <>
      <section className="mt-4 ">
        <SubHeader textContent="Featured" />
        <div className="sm:grid-cols-1 md:grid-cols-2  bg-[#F0F0F0] relative grid  place-items-center p-8 mb-8 mt-4 gap-8">
          <button
            className="bg-red-500 rounded-full absolute z-20 left-0 top-1/2"
            onClick={leftButtonUpdate}
          >
            <ArrowLeftIcon fontSize="large" />
          </button>
          {featuredRecipes.map((recipe, index) => {
            if (displayFrom <= index && index < displayTo) {
              return <RecipeContainer key={uuidv4()} recipe={recipe} />;
            }
          })}
          <button
            className="bg-red-500 rounded-full absolute z-20 right-0 top-1/2"
            onClick={rightButtonUpdate}
          >
            <ArrowRightIcon fontSize="large" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Featured;
