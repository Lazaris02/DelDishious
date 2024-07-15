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
  const displayValue = () => console.log(value, hover);
  return (
    <div>
      <span>Rate this Recipe!</span>
      <Rating
        name="simple-controlled"
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
