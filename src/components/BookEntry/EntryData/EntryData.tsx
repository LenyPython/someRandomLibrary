import styled from 'styled-components'
import ImgScreener from '../ImgScreener/ImgScreener'
import EntryPanel from '../EntryPanel/EntryPanel'
import { Props } from '../BookEntry'

const Container = styled.div`
  display: flex;
  & > * {
    margin: auto 2em;
  }
  h3 {
    font-size: 1.5rem;
  }
  p{
    font-size: 1rem;
  }

`

const EntryData: React.FC<Props> = props => {
  const { id, author, title, image, available, adminUser } = props
  return (
  <Container>
  {
    adminUser &&  <h3>{id}</h3>
  }
  <ImgScreener
    title={title}
    image={image}
  />
  <EntryPanel
    id={id}
    author={author}
    title={title}
    available={available}
  />
  </Container>
  )

}

export default EntryData
