import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function NewsLetter({ form_class, input_class }) {
  return (
    <>
      <form action="#" className={form_class}>
        <AlternateEmailIcon fontSize="large" />
        <input
          className={input_class}
          type="text"
          placeholder="Subscribe to our Newsletter"
        />
      </form>
    </>
  );
}

export default NewsLetter;
