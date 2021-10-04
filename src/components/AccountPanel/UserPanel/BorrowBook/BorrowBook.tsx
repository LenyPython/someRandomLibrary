import styled from 'styled-components'
import { useParams } from 'react-router-dom'

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

const BorrwoBook: React.FC = () => {
  let { id } = useParams<Params>()
  console.log(id)
  return(<Container>
    <ImgContainer>

    </ImgContainer>
    <TextContainer>
      <h2>
            {id}
      </h2>

    </TextContainer>
         </Container>)
}

export default BorrwoBook
