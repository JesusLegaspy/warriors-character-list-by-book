const CharacterShow = ({ character }) => {
  return (
    <div>
      <h3 className="font-semibold">{character.name}</h3>
      {character.description}
    </div>
  );
};

export default CharacterShow;