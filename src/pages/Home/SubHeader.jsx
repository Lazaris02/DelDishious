function SubHeader({ textContent }) {
  return (
    <>
      <span className="m-2">
        <h2 className="bg-text-combo inline text-4xl rounded  p-1">
          {textContent}
        </h2>
      </span>
    </>
  );
}

export default SubHeader;
