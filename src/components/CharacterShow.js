import CharacterEdit from './CharacterEdit';
import { HiXCircle, HiPencilSquare } from 'react-icons/hi2';
import myCharacterContext from '../context/characters';
import { useContext, useState } from 'react';

const CharacterShow = ({ character }) => {
  const { deleteCharacterById } = useContext(myCharacterContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleClickDelete = () => {
    deleteCharacterById(character.id);
  }

  return (
    <div>
      <h3 className="font-semibold">{character.name}</h3>

      <div className='relative text-gray-300'>
        <div className="absolute top-2 right-7 hover:text-gray-400">
          <button onClick={handleClickEdit}><HiPencilSquare /></button>
        </div>
        <div className="absolute top-2 right-2 hover:text-gray-400">
          <button onClick={handleClickDelete}><HiXCircle /></button>
        </div>
        <img src={`https://picsum.photos/seed/${character.id * 10}/300/200`} alt="books" />
      </div>
      {character.description}
      {showEdit && (<CharacterEdit character={character} setShowEdit={setShowEdit} />)}
    </div>
  );
};

export default CharacterShow;