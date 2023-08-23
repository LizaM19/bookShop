function Book({ book: { id, volumeInfo } }) {
  return (
      <div className="bookItem" key={id}>
          <h4>{volumeInfo.title}</h4>
          <div>{volumeInfo.authors}</div>
          <img src={volumeInfo.imageLinks.smallThumbnail} width={60} />
      </div>
  );
}
export default Book;
