import { useState } from "react";
import axios from "axios";

const BookCreate = () => {
  const [title, setTitle] = useState('');

  const createBook = async () => {
    const data = {
      "title": "Alderheart and the chamber of secrets",
      "image": "",
      "character": [
        1,
        2
      ]
    }
    const response = await axios.post('http://localhost:3001/books', data)
    console.log(response);
  };

  const handleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    createBook();
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