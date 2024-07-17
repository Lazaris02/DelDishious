function CategoryRadio({ category }) {
  return (
    <div className="hover:bg-[#00655B] rounded-lg">
      <input
        type="radio"
        name="category_radio"
        value={category}
        id={category}
        className="radio"
      />
      <label htmlFor={category} className="radio-label">
        {category}
      </label>
    </div>
  );
}

export default CategoryRadio;
