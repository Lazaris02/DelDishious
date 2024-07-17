import RecipeContainer from "./RecipeContainer";
import RecipeSearch from "./RecipeSearch";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import {
  getRandomLowerCaseLetter,
  transformRecipes,
} from "../../utils/utilities";

import LoadingButton from "../../components/LoadingButton";
import RecipeCategories from "./RecipeCategories";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const askForMore = async () => {
    setIsFetching(true);
    const randL = getRandomLowerCaseLetter();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${randL}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log("New recipes fetched!");
    updateRecipes(data["meals"]);
    setIsFetching(false);
  };

  const updateRecipes = (jsonRecipes) => {
    setRecipes((previous) => previous.concat(transformRecipes(jsonRecipes)));
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      setIsFetching(true);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );
      const data = await response.json();
      updateRecipes(data["meals"]); //so that we get the meals
      setIsFetching(false);
    };
    fetchRecipeData();
  }, []);
  return (
    <>
      <PageTitle title="Recipes" />
      <RecipeSearch />
      <div className="recipe-grid">
        <RecipeCategories />
        <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid grid-rows-auto gap-4 place-items-center">
          {recipes.map((recipe) => {
            return <RecipeContainer recipe={recipe} key={uuidv4()} />;
          })}
        </div>
      </div>
      <div className="text-center mb-4 mt-4">
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF6F61" }}
          onClick={askForMore}
          disabled={isFetching}
        >
          {isFetching ? (
            <LoadingButton buttonColor="white" />
          ) : (
            <span className="text-lg">View More</span>
          )}
        </Button>
      </div>
    </>
  );
}

export default Recipes;
