import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { NoImgIcon } from '../../../BookEntry/ImgScreener/ImgScreener'
import { borrowReturn } from '../../../../slices/books/booksSlice'
import { Entry } from '../../../../constants/interface/bookSlice'
import { useAppDispatch } from '../../../../appStore/hooks'
import { 
  borrowBook,
  returnBook
} from '../../../../slices/borrowedBooks/borrowedBooks'

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin: auto 3em;
`

const ImgContainer = styled.div`
  width: 300px;
  grid-column; 1;
  border: solid 1px black;
  img{
    width: 100%;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: 1/2;
  padding: 2em;
  border: solid 1px black;
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
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={handleClick}>{
        available?
        'Borrow it':
        'Return'
    }</button> 
    </TextContainer>
    </Container>
  )
}

export default BorrwoBook
