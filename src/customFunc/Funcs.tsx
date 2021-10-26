import { BookInterface } from '../constants/interface/bookSlice'
import BookEntry from '../components/BookEntry/BookEntry'


export const toBooksList = (bookObj: BookInterface[], admin?: boolean): JSX.Element[] => {
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
