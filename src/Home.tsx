import Books from "./services/Books.tsx";
import { useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useState(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=search+terms&langRestrict=ru",
    )
      .then((res) => res.json())
      .then((json) => setBooks(json["items"]));
  });
  return (
    <div>
      <Books books={books} />
    </div>
  );
}
