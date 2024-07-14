import Ingredient from "./Ingredient";

function Ingredients({ ingredients }) {
  console.log(ingredients.length);
  return (
    <>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient ingredient={ingredient} key={index} />
        ))}
      </ul>
    </>
  );
}

export default Ingredients;
