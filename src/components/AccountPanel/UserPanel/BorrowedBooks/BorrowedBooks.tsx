import styled from 'styled-components'
import { selectBorrowedBooks } from '../../../../slices/borrowedBooks/borrowedBooks'
import Button from '@mui/material/Button'
import { Container } from '../../../Styled/Styled'
import { 
  useAppSelector,
  useAppDispatch
} from '../../../../appStore/hooks'
import {selectBooks} from '../../../../slices/books/booksSlice'

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 250px;
`

const BorrowedBooks = () => {
  const borrowedBooksIds = useAppSelector(selectBorrowedBooks)
  const dispatch = useAppDispatch()
  const Books = useAppSelector(selectBooks)
  let hash: { [key: string]: number } = {}
  for(let i in Books) hash[Books[i].id] = +i

  const handleClick =(id: string) => {
    console.log(`borrowing returning: ${id}`)
  }

  const list: JSX.Element[] = []
  for(let entry in borrowedBooksIds) {
  const id = borrowedBooksIds[entry]
  const { title, authors } = Books[hash[id]]
    list.push(<EntryContainer key={id}>
        <h2>{title}</h2>
        <h3>{authors.join(', ')}</h3>
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
