import BookList from './BookList';
import BookCreate from './BookCreate';

const BookPage = () => {

  return <div className='h-screen flex flex-col overflow-hidden'>
    <div className="bg-slate-100 p-4 text-center">
      <h1 className='text-5xl'>Book Characters per Book</h1>
    </div>
    <div className="flex-1 overflow-y-auto">
      <BookList />
    </div>
    <div className="bg-gray-600">
      <BookCreate />
    </div>
  </div>
}

export default BookPage;