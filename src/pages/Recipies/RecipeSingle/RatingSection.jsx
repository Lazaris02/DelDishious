import { Rating } from "@mui/material";
import { useState } from "react";

const ratingLabels = {
  0.5: "Inedible",
  1.0: "Bland",
  1.5: "Unpalatable",
  2.0: "Unappetizing",
  2.5: "Mediocre",
  3.0: "Passable",
  3.5: "Satisfactory",
  4.0: "Tasty",
  4.5: "Delectable",
  5.0: "Exquisite",
};

function RatingSection({ defaultRating }) {
  const [value, setValue] = useState(defaultRating);
  const [hover, setHover] = useState(-1);

  return (
    <div className="flex flex-col text-center text-2xl text-wrap w-auto p-2 m-4 self-center bg-black bg-opacity-80 text-white rounded-lg">
      <span className="text-2xl">Rate this Recipe!</span>
      <Rating
        name="simple-controlled"
        className="self-center bg-white rounded-full p-2"
        defaultValue={value}
        max={5}
        precision={0.5}
        size="large"
        getLabelText={getLabelText}
        onChange={(e, newValue) => setValue(newValue)}
        onChangeActive={(e, newHover) => setHover(newHover)}
      />
      <span>{ratingLabels[hover !== -1 ? hover : value]}</span>
    </div>
  );
}

function getLabelText(key) {
  return ratingLabels[key];
}

export default RatingSection;
