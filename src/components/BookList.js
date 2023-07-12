import { useState } from 'react';
import BookShow from './BookShow';

const BookList = ({ books }) => {
  const [showId, setShowId] = useState(null);

  const handleClick = (id) => {
    setShowId(id);
  };

  const handleBack = () => {
    setShowId(null);
  }

  const bookList = books?.map(book => {
    if (showId && book.id !== showId) return;
    return <BookShow key={book.id} book={book} onClick={handleClick} onBack={handleBack} isSelected={showId === book.id} />;
  });

  return (
    <div className='flex justify-center'>
      {bookList}
    </div>
  );
};

export default BookList;