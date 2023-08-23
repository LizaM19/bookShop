import Book from "./Book.tsx";

export default function Books({ books }) {
  return (
    <div>
      <table>
        <thead>
          {/*<tr>*/}
          {/*  <th>Название книги</th>*/}
          {/*  <th>Автор</th>*/}
          {/*  <th>Обложка</th>*/}
          {/*</tr>*/}
        </thead>
        <tbody>
          <div className={"bookList"}>
            {books?.length ? (
              <ul className={"bookList__list"}>
                {books?.map((book) => <Book book={book} key={book.id} />)}
              </ul>
            ) : (
              <h2 className={"bookList__empty"}>There are no books find =(</h2>
            )}
          </div>
        </tbody>
      </table>
    </div>
  );
}
