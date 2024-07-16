import { Link } from "react-router-dom";

function RecipeSearchResult({ value, mealid }) {
  return (
    <li className="bg-[#01796F] hover:bg-[#00655B] rounded mt-0.5 transition text-white text-center text-lg">
      <Link to={`/recipies/${mealid}`} className="w-full">
        <div>{value}</div>
      </Link>
    </li>
  );
}

export default RecipeSearchResult;
