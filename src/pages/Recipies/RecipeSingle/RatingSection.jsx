import { Rating } from "@mui/material";

function RatingSection() {
  return (
    <div>
      <span>Rate this Recipe!</span>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        precision={0.5}
        defaultValue={3}
      />
    </div>
  );
}

export default RatingSection;
