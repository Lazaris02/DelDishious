import { useEffect, useState } from "react";
import CategoryRadio from "./CategoryRadio";
import { generateUniqueId } from "../../utils/utilities";

function RecipeCategories() {
  const [categories, setCategories] = useState([]);

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
      <span className="bg-[#01796F] rounded-lg flex flex-wrap flex-col fixed top-1/3 ml-1">
        <div>
          <input
            type="radio"
            name="category_radio"
            value="None"
            id="none"
            className="radio"
            key={generateUniqueId()}
          />
          <label htmlFor="none" value="none" className="radio-label">
            None
          </label>
        </div>
        {categories.map((c) => (
          <CategoryRadio category={c["strCategory"]} key={generateUniqueId()} />
        ))}
      </span>
    </div>
  );
}

export default RecipeCategories;
