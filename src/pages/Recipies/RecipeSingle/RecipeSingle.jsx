import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  packRecipeKeys,
  transformSingleRecipe,
} from "../../../utils/utilities";
import Ingredients from "./Ingredients";
import RatingSection from "./RatingSection";

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
    <div>
      <h2>{recipe.meal_name}</h2>
      <p>{recipe.category}</p>
      <img src={recipe.thumbnail} alt="" />
      <p>{recipe.tag}</p>
      <p>recipe.instructions</p>
      <Ingredients ingredients={ingredients} />
      <RatingSection defaultRating={2} />
    </div>
  );
}

export default RecipeSingle;
