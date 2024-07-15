import default_image_source from "../assets/default_img.webp";

export function findImage(url) {
  //returns a url path for an image depending on the category hashed
  return url === null ? default_image_source : url;
}

export function getRandomLowerCaseLetter() {
  const min = 97; //ASCII value for 'a'
  const max = 122; //ASCII value for 'z'
  const randomAscii = Math.floor(Math.random() * (max - min + 1)) + min;
  return String.fromCharCode(randomAscii);
}

export function getFirstNWords(str, n, split_reg) {
  if (str === null) {
    return str;
  }

  let words = str.split(split_reg); //splits on split_regex

  console.log(words, words.length);

  if (words.length <= n) {
    return str;
  }

  let firstNWords = words.slice(0, n); //take the first N elements of array

  return firstNWords.join(split_reg); //reattach the string
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
      meal_name: getFirstNWords(value.strMeal, 6, " "),
      category: value.strCategory,
      instructions: value.strInstructions,
      youtube_video: value.strYoutube,
      origin: value.strArea,
      thumbnail: value.strMealThumb,
      tag: getFirstNWords(value.strTags, 5, ","),
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
    thumbnail: jsonRecipe.strMealThumb,
    tag: jsonRecipe.strTags,
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
