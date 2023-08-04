import { useContext, useEffect, useState } from "react";
import bookContext from "../context/books";
import CharacterList from "./CharacterList";
import myCharacterContext from '../context/characters';

const CharacterPage = ({ book }) => {
  const { setBookPage } = useContext(bookContext);
  const { fetchCharactersByIds } = useContext(myCharacterContext);

  useEffect(() => {
    fetchCharactersByIds(book.characters);
  }, []);

  const handleClick = () => {
    setBookPage('');
  }

  return (
    <div>
      <button onClick={handleClick}>back</button>
      <h1>{book.title}</h1>
      <CharacterList />
    </div>);
}

export default CharacterPage;