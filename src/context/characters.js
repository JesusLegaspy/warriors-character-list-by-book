import axios from "axios";
import { createContext, useContext, useState } from "react";
import bookContext from "./books";

const myCharacterContext = createContext();

const MyCharacterProvider = ({ children }) => {
  const { editBookById } = useContext(bookContext);
  const [characters, setCharacters] = useState([]);

  const fetchCharactersByIds = async (ids) => {
    const allCharacterRequests = ids?.map(characterId => {
      return axios.get(`http://localhost:3001/characters/${characterId}`).then(data => data.data);
    });
    if (allCharacterRequests) setCharacters(await Promise.all(allCharacterRequests));
    else setCharacters([]);
  }

  // todo: optimise
  const createCharacter = async (bookId, name, description, imageUrl = '') => {
    const newCharacter = await axios.post('http://localhost:3001/characters/', {
      name,
      description,
      image: imageUrl,
    }).then(data => data.data);
    const currentCharactersIds = await axios.get(`http://localhost:3001/books/${bookId}`).then(data => data.data.characters);
    await editBookById(bookId, { characters: [...(currentCharactersIds ?? []), newCharacter.id] });
    setCharacters([...characters, newCharacter]);
  }

  const editCharacterById = async (id, data) => {
    const editedCharacter = await axios.patch(`http://localhost:3001/characters/${id}`, data);
    setCharacters(characters.map(character => {
      if (character.id === id) return editedCharacter.data;
      return character;
    }));
  }

  const deleteCharacterById = (id) => {
    axios.delete(`http://localhost:3001/characters/${id}`);
    setCharacters(characters.filter(character => character.id !== id));
  }

  return (
    <myCharacterContext.Provider value={{ characters, fetchCharactersByIds, createCharacter, editCharacterById, deleteCharacterById }}>
      {children}
    </myCharacterContext.Provider>
  );
}

export { MyCharacterProvider };
export default myCharacterContext;