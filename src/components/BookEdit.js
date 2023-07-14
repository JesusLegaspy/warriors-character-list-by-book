import { useState, useContext } from "react";
import bookContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [bookTitle, setBookTitle] = useState(book.title);
  const { editBookById } = useContext(bookContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const changes = {
      title: bookTitle,
    }
    editBookById(book.id, changes);
    onSubmit();
  };

  const onChangeTitle = (event) => {
    setBookTitle(event.target.value);
  }

  return (
    <div className="bg-blue-200 p-3">
      <form className="flex flex-col bg-blue-200g" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookTitle" className="pr-4">Title</label>
          <input id='bookTitle' type="text" value={bookTitle} onChange={onChangeTitle} />
        </div>
        <button className="bg-green-200 hover:bg-green-100 active:bg-green-300 py-2 px-4">Edit</button>
      </form>
    </div>
  );
};

export default BookEdit;