import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { NoImgIcon } from '../../../BookEntry/ImgScreener/ImgScreener'
import { BookInterface } from '../../../../constants/interface/bookSlice'
import { useAppSelector, useAppDispatch } from '../../../../appStore/hooks'
import { getUser } from '../../../../slices/user/user'
import { borrowReturn } from '../../../../sagas/actions'
import { selectBooks } from '../../../../slices/books/booksSlice'
import Button from '@mui/material/Button'

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

const BorrwoBook = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)
  const BOOKS = useAppSelector<BookInterface[]>(selectBooks)
  let { id } = useParams<Params>()
  if(!id) return <h2>No such book index</h2>
  if(!user) return <h2> You must be logged in to borrow a book </h2>
  const book = BOOKS.find(item => item.id === id)
  if(book === undefined) return <h1>Something went wrong...</h1>
  const { available, cover, title, authors } = book!

const handleClick = (): void => {
  dispatch(borrowReturn(id!, user.id!, !available))
}
  return(
    <Container>
    <ImgContainer>
      { 
          cover?
        <img src={cover} alt='cover' /> :
        <NoImgIcon icon='carbon:no-image' />
      }
    </ImgContainer>
    <TextContainer>
      <div>
      <h2>{title}</h2>
        <h3>{authors.join(' ')}</h3>
      </div>
      {
        available?
          <Button 
            onClick={handleClick}
            variant="contained"
            sx={{
              background: 'var(--main-color)',
              color: 'var(--main-button-font-color)'
            }}
            >
            Borrow it
          </Button> :
      <Button variant="contained" disabled>Unavailable</Button>
      }
    </TextContainer>
    </Container>
  )

}

export default BorrwoBook
