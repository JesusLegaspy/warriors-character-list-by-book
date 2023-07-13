import { useState } from "react";
import axios from "axios";

const BookCreate = ({ onCreateBook }) => {
  const [title, setTitle] = useState('');



  const handleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateBook(title);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-blue-200 p-5">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input id='title' type="text" value={title} onChange={handleChange} />
          <label htmlFor="image">Image src</label>
          <input id="image" type="url" />
          <button className="bg-slate-500 py-2 px-4">Add a book</button>
        </form>
      </div>
    </div>
  );
};

export default BookCreate;