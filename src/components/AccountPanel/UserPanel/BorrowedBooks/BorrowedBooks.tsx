import styled from 'styled-components'
import { 
  useAppSelector,
  useAppDispatch
} from '../../../../appStore/hooks'
import { selectBorrowedBooks } from '../../../../slices/borrowedBooks/borrowedBooks'
import { returnBook } from '../../../../slices/borrowedBooks/borrowedBooks'
import { borrowReturn } from '../../../../slices/books/booksSlice'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary-color);
  border-radius: 5px;
  margin: 0 1em;
  padding: 2em;
  & > * {
    margin-bottom: 1.2em;
  }
`

const BorrowedBooks = () => {
  let booksObj = useAppSelector(selectBorrowedBooks)
  const dispatch = useAppDispatch()

  const handleClick =(id: number) => {
    dispatch(borrowReturn(id))
    dispatch(returnBook(id))
  }

  const list: JSX.Element[] = []
      for(let entry in booksObj){
    list.push(<div key={booksObj[entry].author + booksObj[entry].title }>
        <h2>{booksObj[entry].title}</h2>
        <h3>{booksObj[entry].author}</h3>
      <button onClick={()=>handleClick(+entry)}>Return</button>
      </div>)
   }
     
  return(
    <Container>
     {list}
    </Container>
  )

}

export default BorrowedBooks
