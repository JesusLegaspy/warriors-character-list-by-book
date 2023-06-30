// import BookEdit from './BookEdit';
import CharacterList from './CharacterList';

const BookShow = ({ book, onClick, isSelected, onBack }) => {

  const back = isSelected
    ? <button className='border bg-blue-300 px-3' onClick={onBack}>Back</button>
    : '';

  const characters = isSelected
    ? <CharacterList characterList={book.characters} />
    : '';

  return (
    <div>
      {back}
      <div onClick={() => onClick(book.id)}>
        <h3 className='text-xl'>{book.title}</h3>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        {characters}
      </div>
    </div>
  );
};

export default BookShow;