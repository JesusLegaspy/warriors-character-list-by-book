import CharacterShow from './CharacterShow';

const CharacterList = ({ characterList }) => {
  const characters = characterList?.map(character => {
    return <CharacterShow key={character.id} character={character} />
  });

  return (
    <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {characters}
    </div>
  );
};

export default CharacterList;