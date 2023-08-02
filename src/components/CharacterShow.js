import CharacterEdit from './CharacterEdit';
import { HiXCircle, HiPencilSquare } from 'react-icons/hi2';

const CharacterShow = ({ character }) => {
  const handleClickEdit = () => {
    console.log('edit');
  }

  const handleClickDelete = () => {
    console.log('delete');
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
      <CharacterEdit />
    </div>
  );
};

export default CharacterShow;