function AlterLoginField({ icon, color_name, text, url_link }) {
  return (
    <a className={"flex w-3/5 " + color_name} href={url_link}>
      <img src={icon} alt="icon_img" />
      {text}
    </a>
  );
}

export default AlterLoginField;
