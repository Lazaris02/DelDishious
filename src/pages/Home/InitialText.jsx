import SubHeader from "../../components/SubHeader";

function InitialText() {
  return (
    <section className="flex flex-col">
      <SubHeader textContent="What we offer" />
      <p className="text-center bg-text-combo rounded p-2 m-1 text-xl">
        Discover a world of mouthwatering recipes shared by passionate cooks
        just like you. Whether you're craving breakfast inspiration, searching
        for a show-stopping dinner idea, or exploring vegan and gluten-free
        options, our diverse collection has something for every palate. Join our
        vibrant community to share your favorite recipes, rate dishes you've
        tried, and connect with fellow food enthusiasts.
      </p>
    </section>
  );
}

export default InitialText;
