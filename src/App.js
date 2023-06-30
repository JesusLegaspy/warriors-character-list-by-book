import BookList from './components/BookList';
import data from './data';

const App = () => {


  return <div>
    <BookList books={data.books} />
  </div>
};

export default App;
