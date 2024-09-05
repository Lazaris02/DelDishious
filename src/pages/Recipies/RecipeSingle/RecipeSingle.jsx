import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  packRecipeKeys,
  transformSingleRecipe,
} from "../../../utils/utilities";
import Ingredients from "./Ingredients";
import RatingSection from "./RatingSection";
import PageTitle from "../../../components/PageTitle";

function RecipeSingle() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      try {
        const result = await fetch(url);

        if (!result.ok) {
          throw new Error(`HTTP ERROR ${result.status}`);
        }

        const data = await result.json();
        console.log(data["meals"]);

        setRecipe(transformSingleRecipe(data["meals"][0]));
        setIngredients(packRecipeKeys(data["meals"][0]));
      } catch (err) {
        console.error("Error fetching or parsing", err);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-y-2 bg-[#E0F2F1] rounded w-9/12 self-center">
        <div className="flex flex-col items-center justify-center mt-2 gap-y-2">
          <PageTitle title={recipe.meal_name}></PageTitle>
          <span className="text-center text-2xl text-wrap w-auto p-1 self-center bg-[#004D40] bg-opacity-80 text-white rounded-lg">
            {recipe.category}
          </span>
          <div className="bg-[#004D40] bg-opacity-50 rounded-full p-2">
            <img
              src={recipe.thumbnail}
              alt="food_img"
              className="rounded-full self-center"
            />
          </div>

          <p className="text-center text-2xl text-wrap w-auto p-1 self-center bg-black bg-opacity-80 text-white rounded-lg">
            {recipe.tag}
          </p>
        </div>
        <div className="bg-[#01796F] rounded text-white flex justify-between">
          <div className="w-1/2">
            <Ingredients ingredients={ingredients} />
          </div>
          <div className="flex flex-col w-1/2 bg-[#028C77]">
            <h2 className="text-3xl self-center  p-1">🗺️ Directions:</h2>
            <p className="p-4 text-xl self-center text-center">
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
      <RatingSection defaultRating={5} />
    </>
  );
}

export default RecipeSingle;
