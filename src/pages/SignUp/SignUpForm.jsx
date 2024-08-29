function SignUpForm() {
  return (
    <form id="signup_form" className="flex flex-col gap-y-4 p-1">
      <h2 className="indie-text text-3xl text-white text-center">
        Join our tasty journey!
      </h2>
      <input
        type="text"
        className="form-input-design w-3/5 self-center"
        placeholder="Username"
      />
      <input
        type="password"
        className="form-input-design w-3/5 self-center"
        placeholder="Password"
      />
      <input
        type="email"
        className="form-input-design w-3/5 self-center"
        placeholder="Personal Email"
      />
      <button
        type="submit"
        className="bg-[#FF7F50] text-md font-semibold rounded p-1 text-white hover:bg-[#E67348] w-1/4 self-center"
      >
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
