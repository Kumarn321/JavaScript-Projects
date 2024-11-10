import React, { useState } from "react";
import SearchForm from "./SearchForm";
import BookList from "./BookList";
import './App.css';


function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (title) => {
    setLoading(true);
    try {
      const response = await fetch("https://openlibrary.org/search.json?title=${title}");
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // Limit results to 10
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchForm onSearch={fetchBooks} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default App;
