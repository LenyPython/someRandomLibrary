import styled from 'styled-components'
import { selectBorrowedBooks } from '../../../../slices/borrowedBooks/borrowedBooks'
import { returnBook } from '../../../../slices/borrowedBooks/borrowedBooks'
import { borrowReturn } from '../../../../slices/books/booksSlice'
import Button from '@mui/material/Button'
import { 
  useAppSelector,
  useAppDispatch
} from '../../../../appStore/hooks'

const Container = styled.div`
  display: flex;
  background: var(--secondary-color);
  border-radius: 5px;
  margin: 0 1em;
  padding: 2em 3em;
  & > * {
    margin: .6em 1em;
  }
`
const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 250px;
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
    list.push(<EntryContainer key={booksObj[entry].author + booksObj[entry].title }>
        <h2>{booksObj[entry].title}</h2>
        <h3>{booksObj[entry].author}</h3>
      <Button 
        onClick={()=>handleClick(+entry)}
        variant="contained"
        sx={{
          background: 'var(--main-color)',
          color: 'var(--main-button-font-color)'
        }}
        >
        Return
      </Button> 
      </EntryContainer>)
   }
     
  return(
    <Container>
     {list}
    </Container>
  )

}

export default BorrowedBooks
