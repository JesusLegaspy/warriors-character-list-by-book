import CharacterShow from './CharacterShow';
import myCharacterContext from '../context/characters';
import { useContext } from 'react';

const CharacterList = () => {
  const { characters } = useContext(myCharacterContext);
  const content = characters?.map(character => {
    return <CharacterShow key={character.id} character={character} />
  });

  return (
    <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {content}
    </div>
  );
};

export default CharacterList;