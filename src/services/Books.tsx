import Book from "./Book.tsx";

export default function Books({ books }) {
  return (
    <div>
      <table>
        <tbody>
          <div className={"bookList"}>
            {books?.length ? (
              <ul className={"bookList__list"}>
                {books?.map((book) => <Book book={book} key={book.id} />)}
              </ul>
            ) : (
              <h2 className={"bookList__empty"}>There are no books find =(</h2> //TODO: Добавить анимацию загрузки
            )}
          </div>
        </tbody>
      </table>
    </div>
  );
}
