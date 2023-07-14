// import BookEdit from './BookEdit';
import { useState, useContext } from 'react';
import CharacterList from './CharacterList';
import BookEdit from './BookEdit';
import { HiXCircle, HiPencilSquare } from 'react-icons/hi2';
import bookContext from '../context/books';

const BookShow = ({ book, onClick, isSelected, onBack }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { deleteBookById } = useContext(bookContext);

  const back = isSelected
    ? <button className='border bg-blue-300 px-3' onClick={onBack}>Back</button>
    : '';

  const characters = isSelected
    ? <CharacterList characterList={book.characters} />
    : '';

  const handleSubmit = () => {
    setIsEdit(false);
  }

  return (
    <div>
      {back}
      <h3 className='text-xl'>{book.title}</h3>
      <div className="relative cursor-pointer hover:drop-shadow-lg text-gray-300">
        <button
          className='absolute top-2 right-12 text-2xl hover:text-gray-400'
          onClick={() => setIsEdit(!isEdit)}
        >
          <HiPencilSquare />
        </button>
        <button
          className='absolute top-2 right-5 text-2xl hover:text-gray-400'
          onClick={() => deleteBookById(book.id)}
        >
          <HiXCircle />
        </button>
        <div onClick={() => onClick(book.id)} >
          <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        </div>
      </div>
      {isEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : null}
      {characters}
    </div >
  );
};

export default BookShow;