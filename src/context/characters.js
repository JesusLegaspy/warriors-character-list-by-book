import axios from "axios";
import { createContext, useState } from "react";

const myCharacterContext = createContext();

const MyCharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const fetchCharactersByIds = async (ids) => {
    const allCharacterRequests = ids?.map(characterId => {
      return axios.get(`http://localhost:3001/characters/${characterId}`).then(data => data.data);
    });
    if (allCharacterRequests) setCharacters(await Promise.all(allCharacterRequests));
    else setCharacters([]);
  }

  const createCharacter = async (name, description, imageUrl) => {
    const character = await axios.post('http://localhost:3001/characters/', {
      name,
      description,
      image: imageUrl,
    });
    setCharacters([...characters, character.data]);
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