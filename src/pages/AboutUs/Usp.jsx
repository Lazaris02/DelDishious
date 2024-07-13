import SubHeader from "../../components/SubHeader";

function Usp() {
  return (
    <div>
      <SubHeader textContent="What makes Us Unique" />
      <ul className="p-4 mt-4 mb-4 flex flex-col  items-center bg-text-combo text-xl">
        <li>
          User-Friendly Interface: Our platform is designed to make browsing and
          sharing recipes a breeze.
        </li>
        <li>
          Diverse Recipes: From traditional family recipes to modern culinary
          innovations, find it all here.
        </li>
        <li>
          Engaging Community: Connect with other food lovers, leave comments,
          and rate your favorite recipes.
        </li>
      </ul>
    </div>
  );
}

export default Usp;
