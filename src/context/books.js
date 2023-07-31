import { createContext, useState } from 'react';
import axios from 'axios';

const bookContext = createContext(null);

const MyProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [bookPage, setBookPage] = useState('');

  const fetchBooks = async () => {
    const books = await axios.get('http://localhost:3001/books');
    setBooks(books.data);
  }

  const createBook = async (title) => {
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

  return (
    <bookContext.Provider value={{ books, fetchBooks, createBook, editBookById, deleteBookById, setBookPage, bookPage }}>
      {children}
    </bookContext.Provider>
  );
}

export { MyProvider as MyProviders };
export default bookContext;
