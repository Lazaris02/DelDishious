function CategoryRadio({ category, changeFunction }) {
  return (
    <div className="hover:bg-[#00655B] rounded-lg">
      <input
        type="radio"
        name="category_radio"
        value={category}
        id={category}
        className="radio"
        onClick={changeFunction}
      />
      <label htmlFor={category} className="radio-label">
        {category}
      </label>
    </div>
  );
}

export default CategoryRadio;
