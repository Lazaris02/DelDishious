import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

function FavoriteButton({ meal_id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const clickFavorite = () => {
    //make an update request to the server and set
    //the isFavorite value to the one returned from the
    //server!
    setIsFavorite((previous) => !previous);
  };
  //check if for the specific user this meal is
  // in his fav list ...
  return (
    <span className="z-10 absolute right-0 bg-[#01796F] rounded-bl-lg pl-1 group">
      <button
        className="rounded-full group-hover:animate-pulse"
        onClick={clickFavorite}
      >
        {isFavorite ? (
          <FavoriteIcon style={{ color: "red" }} fontSize="large" />
        ) : (
          <FavoriteBorderIcon style={{ color: "red" }} fontSize="large" />
        )}
      </button>
    </span>
  );
}

export default FavoriteButton;
