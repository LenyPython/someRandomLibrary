import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { NoImgIcon } from '../../../BookEntry/ImgScreener/ImgScreener'
import { borrowReturn } from '../../../../slices/books/booksSlice'
import { Entry } from '../../../../constants/interface/bookSlice'
import { useAppDispatch } from '../../../../appStore/hooks'
import Button from '@mui/material/Button'
import { 
  borrowBook,
  returnBook
} from '../../../../slices/borrowedBooks/borrowedBooks'

const Container = styled.div`
  background: var(--secondary-color);
  border-radius: 15px;
  padding: 2rem;
  margin: auto 3em;
  display: grid;
  grid-template-columns: 300px 1fr;
`

const ImgContainer = styled.div`
  width: 300px;
  grid-column; 1;
  img{
    width: 100%;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-area: 1/2;
  padding: 2em;
`

interface Params {
  id?: string
}

const BorrwoBook: React.FC<Entry> = props => {
  const dispatch = useAppDispatch()
  let { id } = useParams<Params>()
  if(!id) return <h2>No such book index</h2>
  const { author, title, image, available } = props[+id]

const handleClick = (): void => {
  dispatch(borrowReturn(+id!))
  available?
  dispatch(borrowBook({
    id: +id!,
    book: props[+id!]
  })):
  dispatch(returnBook(+id!))
}

  return(
    <Container>
    <ImgContainer>
      { 
          image?
        <img src={image} alt='cover' /> :
        <NoImgIcon icon='carbon:no-image' />
      }
    </ImgContainer>
    <TextContainer>
      <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      </div>
      <Button 
        onClick={handleClick}
        variant="contained"
        sx={{
          background: 'var(--main-color)',
          color: 'var(--main-button-font-color)'
        }}
        >{
        available?
        'Borrow it':
        'Return'
    }</Button> 
    </TextContainer>
    </Container>
  )
}

export default BorrwoBook
