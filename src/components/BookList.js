import { useState } from 'react';
import BookShow from './BookShow';

const BookList = ({ books, onDeleteBook, onEditBook }) => {
  const [showId, setShowId] = useState(null);

  const handleClick = (id) => {
    setShowId(id);
  };

  const handleBack = () => {
    setShowId(null);
  }

  const bookList = books?.map(book => {
    if (showId && book.id !== showId) return;
    return <BookShow
      key={book.id}
      book={book}
      onClick={handleClick}
      onBack={handleBack}
      onDeleteBook={onDeleteBook}
      isSelected={showId === book.id}
      onEditBook={onEditBook}
    />;
  });

  return (
    <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {bookList}
    </div>
  );
};

export default BookList;