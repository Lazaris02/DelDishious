import { Rating } from "@mui/material";
import { randomRating, randomNumOfRatings } from "../utils/utilities";

function RatingComponent() {
  return (
    <div className="text-center flex flex-row justify-center">
      <Rating name="read-only" value={randomRating()} readOnly />
      <p className="text-[#FFC300]">({randomNumOfRatings()})</p>
    </div>
  );
}

export default RatingComponent;
