import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  id: number,
  title: string,
  author: string,
  available: boolean
}

const StyledLink = styled(Link)`
  border-radius: 10px;
  text-decoration: none;
  border: none;
  min-widht: 200px;
  font-size: 1.3rem;
  margin: .5em .5em;
  padding: .3em .6em;
  background: blue;
  color: white;
  cursor: pointer;
`
const DisabledBtn = styled.button`
  border-radius: 10px;
  border: none;
  min-widht: 200px;
  font-size: 1.1rem;
  margin: .5em;
  padding: .3em .6em;
  background: gray;
  color: white;
  cursor: not-allowed;
`

const EntryPanel: React.FC<Props> = props => {
  let { id, title, author, available } = props
  return(
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      { 
       available?
      <StyledLink to={`/account/user/borrow/${id}`}>Borrow It!</StyledLink> :
      <DisabledBtn>Unavailable</DisabledBtn>
         
      }
    </div>
  )
}

export default EntryPanel
