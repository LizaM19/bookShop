import Books from "./services/Books.tsx";
import { useState } from "react";

export default function Service() {
  const [books, setBooks] = useState([]);

  useState(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=Комнатные цветы&langRestrict=ru&maxResults=10",
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
