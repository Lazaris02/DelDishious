import default_image_source from "../assets/default_img.webp";

export function findImage(url) {
  //returns a url path for an image depending on the category hashed
  return url === null ? default_image_source : url;
}

export function getFirst10Words(str) {
  let words = str.split(" "); //splits on empty space

  let first10Words = words.slice(0, 10); //take the first 10 elements of array

  return first10Words.join(" "); //reattach the string
}

export function randomRating() {
  return Math.floor(Math.random() * 5) + 1;
}

export function randomNumOfRatings() {
  return Math.floor(Math.random() * 100 + 1);
}

export function transformRecipes(jsonRecipes) {
  //returns an array  that only contains the fields needed for a recipe ad
  const currRecipes = [];
  Object.values(jsonRecipes).forEach((value) => {
    currRecipes.push({
      id: value.idMeal,
      meal_name: value.strMeal,
      category: value.strCategory,
      instructions: value.strInstructions,
      youtube_video: value.strYoutube,
      origin: value.strArea,
      url: value.strImageSource,
    });
  });
  return currRecipes;
}
