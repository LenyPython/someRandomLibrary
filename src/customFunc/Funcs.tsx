import { Entry } from '../slices/books/booksSlice'
import BookEntry from '../components/BookEntry/BookEntry'


export const toBooksList = (bookObj: Entry): JSX.Element[] => {
  const list: JSX.Element[] = []
  for(let entry in bookObj){
    list.push(
      <BookEntry 
        key={`${entry} ${bookObj[entry].title}`}
        id={+entry}
        {...bookObj[entry]}
        />
    )
  }
  return list
}
