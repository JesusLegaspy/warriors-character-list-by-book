import { useContext, useEffect, useState } from "react";
import bookContext from "../context/books";
import CharacterList from "./CharacterList";
import myCharacterContext from '../context/characters';

const CharacterPage = ({ book }) => {
  const { setBookPage } = useContext(bookContext);
  const { fetchCharactersByIds, createCharacter } = useContext(myCharacterContext);

  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    fetchCharactersByIds(book.characters);
  }, []);

  const handleBackClick = () => {
    setBookPage('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createCharacter(book.id, newName, newDescription, newImage);
    setNewName('');
    setNewDescription('');
    setNewImage('');
  };

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }
  const handleDescriptionInput = (event) => {
    setNewDescription(event.target.value);
  }
  const handleNameImage = (event) => {
    setNewImage(event.target.value);
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <button className="self-start bg-blue-300 hover:bg-blue-200 active:bg-blue-400 py-2 px-4" onClick={handleBackClick}>back</button>
      <h1 className="self-center text-5xl">{book.title}</h1>
      <div className="flex-1 overflow-y-scroll">
        <CharacterList />
      </div>
      <div className="bg-gray-600 flex w-full justify-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between p-1">
            <label htmlFor="newName pr-2">name</label>
            <input id="newName" type="text" onChange={handleNameInput} value={newName} />
          </div>
          <div className="flex justify-between p-1">
            <label htmlFor="newDescription">Description</label>
            <input id="newDescription" type="text" onChange={handleDescriptionInput} value={newDescription} />
          </div>
          <div className="flex justify-between p-1">
            <label htmlFor="newImage">Image</label>
            <input id="newImage" type="text" onChange={handleNameImage} value={newImage} />
          </div>
          <div className="p-1">
            <button className="w-full bg-blue-200 hover:bg-blue-100 active:bg-blue-300 py-2 px-4">Create</button>
          </div>
        </form>
      </div>
    </div>);
}

export default CharacterPage;