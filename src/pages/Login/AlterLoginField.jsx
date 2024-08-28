function AlterLoginField({ icon, color_name, text, url_link }) {
  return (
    <a className={"flex w-1/2 font-bold text-lg justify-center items-center mt-2 p-1 rounded " + color_name} href={url_link}>
      <span className="p-1 flex-start">{icon}</span>
      {text}
    </a>
  );
}

export default AlterLoginField;
