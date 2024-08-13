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
  const [filter, setFilter] = useState("");

  const handleChildData = (catFilter) => {
    setFilter(catFilter);
  };

  const askForMore = async () => {
    setIsFetching(true);
    const randL = getRandomLowerCaseLetter();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${randL}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log("New recipes fetched!");
    if (data["meals"] !== null) {
      appendRecipes(data["meals"]);
    } else {
      console.log("Was null!");
    }
    setIsFetching(false);
  };

  const updateRecipes = (jsonRecipes) => {
    //if we apply filter we don't want to append the new recipes. We drop the previous
    setRecipes(transformRecipes(jsonRecipes));
    console.log(recipes, "after updating!");
  };

  const appendRecipes = (jsonRecipes) => {
    setRecipes((previous) => previous.concat(transformRecipes(jsonRecipes)));
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      const url =
        filter === ""
          ? "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
          : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`;
      console.log(url, "THE URL _______");
      const response = await fetch(url);
      const data = await response.json();
      console.log(data["meals"], "trigger filter thing");
      updateRecipes(data["meals"]); //so that we get the meals
    };
    fetchRecipeData();
  }, [filter]);
  return (
    <>
      <PageTitle title="Recipes" />
      <RecipeSearch />
      <div className="recipe-grid">
        <RecipeCategories filterFunction={handleChildData} />
        <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid grid-rows-auto gap-4 place-items-center">
          {recipes.map((recipe) => {
            return <RecipeContainer recipe={recipe} key={uuidv4()} />;
          })}
        </div>
      
      <div className="text-center mb-4 mt-4 col-start-2 col-span-2 ">
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
      </div>
    </>
  );
}

export default Recipes;
