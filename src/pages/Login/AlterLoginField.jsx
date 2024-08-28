function AlterLoginField({ icon, color, text, url_link }) {
  return (
    <a className="flex" href={url_link}>
      <img src={icon} alt="icon_img" />
      {text}
    </a>
  );
}

export default AlterLoginField;
