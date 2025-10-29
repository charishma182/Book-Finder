import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150';
  return (
    <div className="border p-4 rounded shadow">
      <img src={coverUrl} alt={book.title} className="w-32 h-48 object-cover mb-2" />
      <h3 className="font-bold">{book.title}</h3>
      <p>Author: {book.author_name?.join(', ') || 'Unknown'}</p>
      <p>Year: {book.first_publish_year || 'N/A'}</p>
      <a href={`https://openlibrary.org/works/${book.key}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on Open Library</a>
    </div>
  );
};

export default BookCard;
