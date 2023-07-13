// import BookEdit from './BookEdit';
import CharacterList from './CharacterList';

const BookShow = ({ book, onClick, isSelected, onBack, onDeleteBook }) => {

  const back = isSelected
    ? <button className='border bg-blue-300 px-3' onClick={onBack}>Back</button>
    : '';

  const characters = isSelected
    ? <CharacterList characterList={book.characters} />
    : '';

  return (
    <div>
      {back}
      <h3 className='text-xl'>{book.title}</h3>
      <div className="relative cursor-pointer hover:drop-shadow-lg">
        <button
          className='absolute top-3 right-5 bg-slate-200 w-6 h-6 rounded-full align-middle hover:bg-slate-300 active:bg-slate-400'
          onClick={() => onDeleteBook(book.id)}
        >
          x
        </button>
        <div onClick={() => onClick(book.id)} >
          <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        </div>
      </div>

      {characters}
    </div >
  );
};

export default BookShow;