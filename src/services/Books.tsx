import Book from "./Book.tsx";

export default function Books({ books }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Название книги</th>
            <th>Автор</th>
            <th>Обложка</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
