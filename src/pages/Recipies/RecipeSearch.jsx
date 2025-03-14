import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import RecipeSearchResult from "./RecipeSearchResult";
import { generateUniqueId } from "../../utils/utilities";
import { useNavigate } from "react-router-dom";

function RecipeSearch() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const formSubmit = () => {
    if (searchResults.length === 0) {
      console.log("hi");
      navigate("/notfound");
      return;
    }
    navigate(`/recipies/${firstResult["id"]}`);
  };
  const handleKeySubmit = (e) => {
    if (e.key === "Enter") {
      formSubmit();
    }
  };

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
        //handle error here
        console.err("fetched an error from searchlist data!");
      }
    };

    const delayedSearch = setTimeout(fetchSearchList, 500);
    return () => clearTimeout(delayedSearch);
  }, [searchString]);
  return (
    <div className="flex justify-center mt-4 mb-4 relative">
      <label
        className="bg-[#01796F] rounded p-1"
        htmlFor="search-recipe"
        onClick={formSubmit}
      >
        <SearchIcon style={{ color: "white" }} fontSize="large" />
      </label>
      <div>
        <input
          id="search-recipe"
          type="text"
          value={searchString}
          autoComplete="off"
          placeholder="Search Recipe"
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={(e) => {
            handleKeySubmit(e);
          }}
          className="text-[#01796F] p-1 font-semibold text-center rounded border-2 border-[#01796F] w-96 mt-1"
        />
        <ul className="absolute top-0  p-2 w-96 z-30 mt-10">
          {searchResults.length === 0 && searchString !== "" ? (
            <RecipeSearchResult value={"Not found"} />
          ) : null}

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
    console.log("returning now!");
    return [];
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
