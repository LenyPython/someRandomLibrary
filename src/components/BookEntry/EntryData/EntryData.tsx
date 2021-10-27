import styled from 'styled-components'
import ImgScreener from '../ImgScreener/ImgScreener'
import EntryPanel from '../EntryPanel/EntryPanel'
import {BookInterface} from '../../../constants/interface/bookSlice'
import {useAppSelector} from '../../../appStore/hooks'
import {getUser} from '../../../slices/user/user'

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

const EntryData: React.FC<BookInterface> = props => {
  const { admin } = useAppSelector(getUser)
  const { id, authors, title, cover, available } = props
  return (
  <Container>
  <ImgScreener
    title={title}
    image={cover}
  />
  {
    admin &&  <h4>ID: {id}</h4>
  }
  <EntryPanel
    id={id}
    authors={authors}
    title={title}
    available={available}
  />
  </Container>
  )

}

export default EntryData
