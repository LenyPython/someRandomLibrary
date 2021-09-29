import { selectBooks } from './slices/books/booksSlice'
import { useSelector } from 'react-redux'


function App() {
  let bookList = useSelector(selectBooks)

  console.log(bookList)
  return (
    <div className="App">
    </div>
  );
}

export default App;
