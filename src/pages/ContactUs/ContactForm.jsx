import { useForm } from "react-hook-form";
function ContactForm() {
  return (
    <form
      id="contactus-form"
      className="items-center bg-[#01796F] w-1/2 h-auto rounded-lg"
    >
      <div className="flex p-4 justify-evenly flex-wrap">
        <div className="flex flex-col">
          <label htmlFor="form-name" className="form-label-design self-center">
            Name:
          </label>
          <input
            type="text"
            id="form-name"
            className="form-input-design"
            placeholder="True name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="form-email"
            className="form-label-design self-center "
          >
            E-mail:
          </label>
          <input
            type="email"
            id="form-email"
            className="form-input-design"
            placeholder="xyz@mail.com"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="topic"
            className="form-label-design self-center "
            required
          >
            Choose a topic:
          </label>
          <select name="" id="topic" className="form-input-design">
            <option value="question">I have a general question.</option>
            <option value="">I have trouble posting a recipe.</option>
            <option value="">I have issues with my account</option>
            <option value="">Other</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="more-info" className="form-label-design ">
          More details:
        </label>
        <textarea
          name="more-info"
          id="more-info"
          placeholder="state your problem!"
          className="bg-gray-200 rounded-lg p-1  w-1/2 h-fit focus:placeholder-transparent"
        ></textarea>
      </div>
      <span className="flex justify-center mt-4 p-2">
        <button
          type="submit"
          className="text-white bg-red-500 rounded-lg p-2 font-bold hover:bg-red-600"
        >
          Submit
        </button>
      </span>
    </form>
  );
}

export default ContactForm;
