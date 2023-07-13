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

  const onCreateBook = async (title) => {
    const data = {
      "title": title,
      "image": "",
    }
    const response = await axios.post('http://localhost:3001/books', data)
    setBooks([...books, response.data]);
  };

  const editBookById = async (id, data) => {
    const response = await axios.patch(`http://localhost:3001/books/${id}`, data);
    setBooks(books.map(book => {
      if (book.id === id) return ({ ...book, ...response.data });
      return book;
    }));
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  return <div>
    <BookList books={books} onDeleteBook={deleteBookById} onEditBook={editBookById} />
    <BookCreate onCreateBook={onCreateBook} />
  </div>
};

export default App;
