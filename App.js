import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`);
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError('Failed to fetch books. Try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(fetchBooks, 500); // Debounce
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Finder</h1>
      <SearchBar query={query} setQuery={setQuery} searchType={searchType} setSearchType={setSearchType} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
