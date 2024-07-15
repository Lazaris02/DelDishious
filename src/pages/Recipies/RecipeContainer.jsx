import TimeComponent from "./TimeComponent";
import { getFirstNWords } from "../../utils/utilities";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import RatingComponent from "../../components/RatingComponent";

function RecipeContainer({ recipe }) {
  const image = recipe.thumbnail;
  const singleURL = "/recipies/" + recipe.id;
  return (
    <Link
      to={singleURL}
      className="text-white bg-[#01796F]  flex flex-col h-full flex-grow rounded-lg min-h-64 w-96  group"
    >
      <div className="flex flex-col rounded-lg relative h-1/2 ">
        <TimeComponent time="40'-50'" />
        <FavoriteButton meal_id={recipe.id} />
        <img
          src={image}
          alt="category image"
          className="rounded-t-lg absolute h-44 w-full h-full z-0 "
        />
        <h2 className="text-center text-3xl align-center justify-center z-10 bg-black m-2 bg-opacity-50 group-hover:text-black group-hover:bg-white group-hover:bg-opacity-50 transition-all">
          {recipe.meal_name}
        </h2>
      </div>
      <div className="h-auto flex flex-col">
        <p className="text-center text-xl">
          {recipe.category}, {recipe.origin}
        </p>

        <p className="text-center text-xl text-wrap w-auto p-1 self-center bg-black bg-opacity-50 text-white rounded-lg">
          {recipe.tag === null ? "No Tag" : recipe.tag}
        </p>

        <RatingComponent />
      </div>
    </Link>
  );
}

export default RecipeContainer;
