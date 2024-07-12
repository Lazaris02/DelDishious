import SearchIcon from "@mui/icons-material/Search";

function RecipeSearch() {
  return (
    <div className="flex justify-center mt-4 mb-4">
      <span className="bg-[#01796F] rounded p-1">
        <SearchIcon style={{ color: "white" }} fontSize="large" />
      </span>

      <input
        type="text"
        placeholder="Search Recipe"
        className="text-[#01796F] p-1 font-semibold text-center rounded border-2 border-[#01796F]"
      />
    </div>
  );
}

export default RecipeSearch;
