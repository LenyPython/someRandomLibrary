import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { NoImgIcon } from '../../../BookEntry/ImgScreener/ImgScreener'
import { Entry } from '../../../../slices/books/booksSlice'
import { DisabledBtn } from '../../../Styled/Styled'

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
  let { id } = useParams<Params>()
  if(!id) return <h2>No such book index</h2>
  const { author, title, image, available } = props[+id]
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
      {
        available?
          <DisabledBtn>Borrow it</DisabledBtn> :
          <DisabledBtn>Unavailable</DisabledBtn>}
    </TextContainer>
    </Container>
  )
}

export default BorrwoBook
