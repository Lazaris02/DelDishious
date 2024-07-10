import TimeComponent from "./TimeComponent";
import { findImage, getFirst10Words } from "../../utils/utilities";
import FavoriteButton from "./FavoriteButton";
import { Rating } from "@mui/material";

function RecipeContainer({ recipe }) {
  const image = findImage(recipe.url);
  return (
    <div className="text-white bg-[#01796F]  flex flex-col rounded-lg relative min-h-96">
      <TimeComponent time="40'-50'" />
      <FavoriteButton meal_id={recipe.id} />
      <img
        src={image}
        alt="category image"
        className="rounded-lg absolute h-44 w-full z-0"
      />
      <h2 className="text-center text-3xl">{recipe.meal_name}</h2>
      <p className="text-center text-xl">
        {recipe.category}, {recipe.origin}{" "}
      </p>
      <p className="text-center text-2xl">
        {getFirst10Words(recipe.instructions)}...
      </p>
      <div className="text-center">
        <Rating name="read-only" value={2} readOnly />
      </div>
    </div>
  );
}

export default RecipeContainer;
