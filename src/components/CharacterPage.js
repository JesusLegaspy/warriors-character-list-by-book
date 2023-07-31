import { useContext, useEffect, useState } from "react";
import axios from "axios";
import bookContext from "../context/books";

const CharacterPage = ({ book }) => {
  const [characters, setCharacters] = useState();
  const { setBookPage } = useContext(bookContext);

  const fetchCharacters = async () => {
    const allCharacterRequests = book.characters?.map(characterId => {
      return axios.get(`http://localhost:3001/characters/${characterId}`).then(data => data.data);
    });
    if (allCharacterRequests) return await Promise.all(allCharacterRequests);
  }

  useEffect(() => {
    fetchCharacters().then(allCharacters => { setCharacters(allCharacters) });
  }, []);

  const content = characters?.map(character => {
    return (
      <div key={character.id}>
        <h2>{character.name}</h2>
        <h3>{character.description}</h3>
      </div>
    );
  });

  const handleClick = () => {
    setBookPage('');
  }

  return (
    <div>
      <button onClick={handleClick}>back</button>
      <h1>{book.title}</h1>
      {content}
    </div>);
}

export default CharacterPage;