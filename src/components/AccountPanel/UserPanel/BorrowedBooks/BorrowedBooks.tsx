import styled from 'styled-components'
import { selectBorrowedBooks } from '../../../../slices/borrowedBooks/borrowedBooks'
import Button from '@mui/material/Button'
import { Container } from '../../../Styled/Styled'
import { 
  useAppSelector,
  useAppDispatch
} from '../../../../appStore/hooks'
import {selectBooks} from '../../../../slices/books/booksSlice'
import { borrowReturn } from '../../../../sagas/actions'
import {getUser} from '../../../../slices/user/user'
import {setCurrentRead} from '../../../../slices/currentBook/currentBook'

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 250px;
`

const BorrowedBooks = () => {
  const dispatch = useAppDispatch()
  let borrowedBooksIds = useAppSelector(selectBorrowedBooks)
  const user = useAppSelector(getUser)
  const Books = useAppSelector(selectBooks)
  if(borrowedBooksIds.length === 0) return <Container><h1>No Books borrowed</h1></Container>

  //hash bookentries to get O(1) time search after O(n) time hashing all books
  let hash: { [key: string]: number } = {}
  for(let i in Books) hash[Books[i].id] = +i

  const handleClick =(id: string) => {
    dispatch(borrowReturn(id, user.id!, true))
  }

  const list: JSX.Element[] = []
  for(let entry of borrowedBooksIds) {
  const id = entry
  if(!hash[id]) {
    list.push(
      <EntryContainer key={id}>
        {'Book has been deleted'}
        <Button 
          onClick={()=>handleClick(id)}
          variant="contained"
          sx={{
            background: 'var(--main-color)',
            color: 'var(--main-button-font-color)'
          }}
          >
          Delete borrowed entry
        </Button> 
      </EntryContainer>
    )
    continue
  }
  const { title, authors } = Books[hash[id]]
    list.push(
    <EntryContainer key={id}>
        <h2>{title}</h2>
        <h3>{authors.join(', ')}</h3>
      <Button
        variant="contained"
        onClick={()=>dispatch(setCurrentRead(Books[hash[id]]))}
        sx={{
          background: 'var(--main-color)',
          color: 'var(--main-button-font-color)'
        }}
      >
        Read
      </Button>
      <Button 
        onClick={()=>handleClick(id)}
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
