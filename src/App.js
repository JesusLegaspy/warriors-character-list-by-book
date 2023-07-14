import { useEffect, useContext } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import bookContext from './context/books';

const App = () => {
  const { fetchBooks } = useContext(bookContext);

  useEffect(() => {
    fetchBooks()
  }, []);

  return <div className='bg-gray-500'>
    <BookList />
    <BookCreate />
  </div>
};

export default App;
