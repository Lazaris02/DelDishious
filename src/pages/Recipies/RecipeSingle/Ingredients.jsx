import Ingredient from "./Ingredient";

function Ingredients({ ingredients }) {
  console.log(ingredients);
  return (
    <div className="p-2 flex flex-col gap-y-2 items-center">
      <h3 className="text-3xl mb-2">🍅 Ingredients:</h3>
      <ul className="flex flex-col gap-y-3 text-center text-2xl">
        {ingredients.map((ingredient, index) => (
          <Ingredient ingredient={ingredient} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
