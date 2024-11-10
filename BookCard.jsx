import React from "react";

function BookCard({ title, author, coverId }) {
  const coverUrl = coverId
    ? "https://covers.openlibrary.org/b/id/${coverId}-M.jpg"
    : "https://via.placeholder.com/150";

  return (
    <div>
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author ? `by ${author}` : "Author unknown"}</p>
    </div>
  );
}

export default BookCard;
