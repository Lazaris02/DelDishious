import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ForwardIcon from '@mui/icons-material/Forward';

function NewsLetter({ form_class, input_class }) {

  const handleSubmit = () =>{
    // makes a post request on the server
    // the server either returns that this email is already in the 
    // newsletter list or saves it.
    //depending on the code returned we display something different
  }

  return (
    <>
      <form action="#" className={form_class}>
        <AlternateEmailIcon fontSize="large" />
        <input
          className={input_class}
          type="text"
          placeholder="Subscribe for News"
        />
        <button type="submit" onSubmit={handleSubmit} className="bg-red-500 rounded"><ForwardIcon /></button>
      </form>
    </>
  );
}





export default NewsLetter;
