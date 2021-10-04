import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  display: grid;
  grid-column-template: 300px 1fr;
`

const ImgContainer = styled.div`
  width: 300px;
  grid-area; 1;
  img{
    width: 100%;
  }
`
const TextContainer = styled. div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`

interface Params {
  id?: string
}

const BorrwoBook: React.FC = () => {
  let { id } = useParams<Params>()

  return(<Container>
    <ImgContainer>

    </ImgContainer>
    <TextContainer>


    </TextContainer>
         </Container>)
}

export default BorrwoBook
