import { useEffect, useContext, useState } from 'react';
import bookContext from './context/books';
import BookPage from './components/BookPage';
import CharacterPage from './components/CharacterPage';
import BookShow from './components/BookShow';

const App = () => {
  const { fetchBooks, bookPage } = useContext(bookContext);


  useEffect(() => {
    fetchBooks();
  }, []);

  const content = bookPage === '' ? <BookPage /> : <CharacterPage book={bookPage} />

  return (
    <div className='bg-gray-500'>
      {content}
    </div>
  )
};

export default App;
