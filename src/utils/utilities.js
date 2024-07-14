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

export function transformSingleRecipe(jsonRecipe) {
  //packs only the necessary key-value pairs of the object
  //into a new more lightweight version and easier to handle names
  console.log(jsonRecipe[1]);
  return {
    id: jsonRecipe.idMeal,
    meal_name: jsonRecipe.strMeal,
    category: jsonRecipe.strCategory,
    instructions: jsonRecipe.strInstructions,
    youtube_video: jsonRecipe.strYoutube,
    origin: jsonRecipe.strArea,
    url: jsonRecipe.strImageSource,
  };
}

export function packRecipeKeys(jsonRecipe) {
  //takes the ingredients and their measures (f.e water , 1/2 cup)
  //and packs them in a single string (water : 1/2 cup)
  //it individually filters out the jsonRecipe fields to
  //throw away the nulls and ""
  //it returns an array of strings.

  const ingredients = Object.keys(jsonRecipe)
    .filter(
      (key) =>
        key.startsWith("strIngredient") &&
        jsonRecipe[key] !== null &&
        jsonRecipe[key] !== ""
    )
    .map((key) => jsonRecipe[key]);

  const measures = Object.keys(jsonRecipe)
    .filter(
      (key) =>
        key.startsWith("strMeasure") &&
        jsonRecipe[key] !== null &&
        jsonRecipe[key] !== ""
    )
    .map((key) => jsonRecipe[key]);

  const finalPacks = [];
  for (let i = 0; i < measures.length; i++) {
    finalPacks.push(`${ingredients[i]}:${measures[i]}`);
  }

  return finalPacks;
}
