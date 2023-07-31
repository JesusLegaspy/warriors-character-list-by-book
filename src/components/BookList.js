import { useState, useContext } from 'react';
import BookShow from './BookShow';
import bookContext from '../context/books';

const BookList = () => {
  const [showId, setShowId] = useState(null);
  const { books, setBookPage } = useContext(bookContext);

  const handleClick = (book) => {
    setBookPage(book);
  };

  const handleBack = () => {
    setShowId(null);
  }

  const bookList = books?.map(book => {
    if (showId && book.id !== showId) return;
    return <BookShow
      key={book.id}
      book={book}
      onClick={() => handleClick(book)}
      onBack={handleBack}
    />;
  });

  return (
    <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {bookList}
    </div>
  );
};

export default BookList;