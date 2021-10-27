import BookEntry from '../components/BookEntry/BookEntry'
import { BookInterface } from '../constants/interface/bookSlice'


export const toBooksList = (bookObj: BookInterface[]): JSX.Element[] => {
  const list: JSX.Element[] = []
  for(let entry in bookObj){
    list.push(
      <BookEntry 
        key={`${bookObj[entry].id}`}
        {...bookObj[entry]}
        />
    )
  }
  return list
}
