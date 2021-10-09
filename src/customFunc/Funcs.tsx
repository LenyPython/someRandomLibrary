import { Entry } from '../slices/books/booksSlice'
import BookEntry from '../components/BookEntry/BookEntry'


export const toBooksList = (bookObj: Entry, admin?: boolean): JSX.Element[] => {
  const list: JSX.Element[] = []
  for(let entry in bookObj){
    list.push(
      <BookEntry 
        key={`${entry}`}
        id={+entry}
        {...bookObj[entry]}
        adminUser={admin}
        />
    )
  }
  return list
}