import { useEffect, useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const books = await axios.get('http://localhost:3001/books');
    setBooks(books.data);
  }

  useEffect(() => {
    fetchBooks()
  }, []);

  return <div>
    <BookList books={books} />
    <BookCreate />
  </div>
};

export default App;
