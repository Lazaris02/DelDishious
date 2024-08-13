import { useEffect, useState } from "react";
import CategoryRadio from "./CategoryRadio";
import { generateUniqueId } from "../../utils/utilities";
import { getRandomLowerCaseLetter } from "../../utils/utilities";

function RecipeCategories({ filterFunction }) {
  const [categories, setCategories] = useState([]);

  const changeFilter = (e) => {
    console.log(e.target.value);
    filterFunction(e.target.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw Error("Error fetching data!");
        }

        const data = await response.json();
        setCategories([...data["categories"]]);
      } catch (err) {
        console.log("Error occured!", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="bg-[#01796F] rounded-lg flex flex-wrap flex-col fixed top-32 ml-1">
        <div className="hover:bg-[#00655B] rounded-lg">
          <input
            type="radio"
            name="category_radio"
            value=""
            id="none"
            onClick={changeFilter}
            className="radio"
            key={generateUniqueId()}
          />
          <label htmlFor="none" value="none" className="radio-label">
            None
          </label>
        </div>
        {categories.map((c) => (
          <CategoryRadio
            category={c["strCategory"]}
            key={generateUniqueId()}
            changeFunction={changeFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeCategories;
