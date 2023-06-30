import CharacterShow from './CharacterShow';

const CharacterList = ({ characterList }) => {
  const characters = characterList.map(character => {
    return <CharacterShow key={character.id} character={character} />
  });

  return (
    <div className=''>
      {characters}
    </div>
  );
};

export default CharacterList;