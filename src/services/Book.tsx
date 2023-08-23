function Book({ book: { id, volumeInfo } }) {
  return (
    <div className="bookItem" key={id}>
      <h5>{volumeInfo.title}</h5>
      <div>{volumeInfo.authors}</div>
      <img src={volumeInfo.imageLinks.smallThumbnail} />
    </div>
  );
}
export default Book;
