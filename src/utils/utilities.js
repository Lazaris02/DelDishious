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
