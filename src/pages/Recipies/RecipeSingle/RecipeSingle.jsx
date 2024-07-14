import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  packRecipeKeys,
  transformSingleRecipe,
} from "../../../utils/utilities";
import Ingredients from "./Ingredients";

function RecipeSingle() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  let ingredients;

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
        ingredients = packRecipeKeys(data["meals"][0]);
        console.log(ingredients);
      } catch (err) {
        console.error("Error fetching or parsing", err);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <h2>{recipe.meal_name}</h2>
      <p>{recipe.category}</p>
      <video
        src={recipe.youtube_video}
        className="w-10/12 h-10/12"
        controls
        fs="true"
      >
        Error playing the video!
      </video>
    </div>
  );
}

export default RecipeSingle;
