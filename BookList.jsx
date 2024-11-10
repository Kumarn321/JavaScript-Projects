import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author_name?.[0]}
            coverId={book.cover_i}
          />
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default BookList;
