function Book({ book: { id, volumeInfo } }) {
  return (
    <tr key={id}>
      <td>{volumeInfo.title}</td>
      <td>{volumeInfo.authors}</td>
      <td>
          <img src={volumeInfo.imageLinks.smallThumbnail} width={60} />
      </td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
}
export default Book;
