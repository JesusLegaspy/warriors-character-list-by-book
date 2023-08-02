import axios from "axios";
import { createContext } from "react";

const myCharacterContext = createContext();

const MyCharacterProvider = ({ children }) => {

  const fetchCharactersByIds = async (ids) => {
    const allCharacterRequests = ids?.map(characterId => {
      return axios.get(`http://localhost:3001/characters/${characterId}`).then(data => data.data);
    });
    if (allCharacterRequests) return await Promise.all(allCharacterRequests);
  }

  const createCharacter = async (name, description, imageUrl) => {
    const character = await axios.post('http://localhost:3001/characters/', {
      name,
      description,
      image: imageUrl,
    });
    return character.data;
  }

  const editCharacterById = (id, data) => {

  }

  return (
    <myCharacterContext.Provider value={{ fetchCharactersByIds }}>
      {children}
    </myCharacterContext.Provider>
  );
}

export { MyCharacterProvider };
export default myCharacterContext;