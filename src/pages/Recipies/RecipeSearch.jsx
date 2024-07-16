import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import RecipeSearchResult from "./RecipeSearchResult";
import { generateUniqueId } from "../../utils/utilities";

function RecipeSearch() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchList = async () => {
      if (searchString === "") {
        setSearchResults([]);
        return;
      }
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw Error("Error fetching from api!");
        }

        const data = await response.json();
        const searchResultArray = handleSearchList(data["meals"]); //array of string search results
        setSearchResults(searchResultArray);
      } catch (err) {
        console.error("Error occured", err);
      }
    };
    fetchSearchList();
  }, [searchString]);
  return (
    <div className="flex justify-center mt-4 mb-4 relative">
      <label className="bg-[#01796F] rounded p-1" htmlFor="search-recipe">
        <SearchIcon style={{ color: "white" }} fontSize="large" />
      </label>
      <div>
        <input
          id="search-recipe"
          type="text"
          value={searchString}
          placeholder="Search Recipe"
          onChange={(e) => setSearchString(e.target.value)}
          className="text-[#01796F] p-1 font-semibold text-center rounded border-2 border-[#01796F] w-96 mt-1"
        />

        <ul className="absolute top-0  p-2 w-96 z-30 mt-10">
          {searchResults.slice(0, 5).map((sl) => (
            <RecipeSearchResult
              value={sl["name"]}
              mealid={sl["id"]}
              key={generateUniqueId()}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function handleSearchList(jsonRecipeArray) {
  //returns an array of the meal names contained in the api request
  console.log(jsonRecipeArray, "the searchlist");
  if (jsonRecipeArray === null) {
    return ["No matching results"];
  }
  const mealNameArray = [];
  for (let i = 0; i < jsonRecipeArray.length; i++) {
    mealNameArray.push({
      name: jsonRecipeArray[i]["strMeal"],
      id: jsonRecipeArray[i]["idMeal"],
    });
  }
  console.log(mealNameArray, "finished product!");
  return mealNameArray.sort();
}

export default RecipeSearch;
