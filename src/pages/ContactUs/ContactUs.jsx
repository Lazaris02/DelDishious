import ContactForm from "./ContactForm";
import PageTitle from "../../components/PageTitle";

function ContactUs() {
  return (
    <>
      <PageTitle title="Write your Question!" />
      <div className="flex justify-center mt-auto">
        <ContactForm />
      </div>
    </>
  );
}

export default ContactUs;
