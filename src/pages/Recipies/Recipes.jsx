import RecipeContainer from "./RecipeContainer";
import RecipeSearch from "./RecipeSearch";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const updateRecipes = (jsonRecipes) => {
    const currRecipes = [];
    Object.values(jsonRecipes).forEach((value) => {
      currRecipes.push({
        id: value.idMeal,
        meal_name: value.strMeal,
        category: value.strCategory,
        instructions: value.strInstructions,
        youtube_video: value.strYoutube,
        origin: value.strArea,
        url: value.strImageSource,
      });
    });
    setRecipes(currRecipes);
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const data = await response.json();
      updateRecipes(data["meals"]); //so that we get the meals
    };
    fetchRecipeData();
  }, []);
  return (
    <>
      <RecipeSearch />
      <h1>Recipes</h1>
      <div className="sm:grid-cols-1 md:grid-cols-2 grid grid-rows-auto gap-4 place-items-center">
        {recipes.map((recipe) => {
          return <RecipeContainer recipe={recipe} key={uuidv4()} />;
        })}
      </div>
      <div className="text-center mb-4 mt-4">
        <Button variant="contained" style={{ backgroundColor: "#FF6F61" }}>
          View More
        </Button>
      </div>
    </>
  );
}

export default Recipes;
