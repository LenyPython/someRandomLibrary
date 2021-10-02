import styled from 'styled-components'

interface PropsInterface {
  title: string,
  author: string,
  available: boolean
}

const Button = styled.button`
  border-radius: 10px;
  border: none;
  min-widht: 200px;
  font-size: 1.1rem;
  margin: .5em;
  padding: .3em .6em;
  background: blue;
  color: white;
  cursor: pointer;
`

const DisabledBtn = styled(Button)`
  background: gray;
  cursor: not-allowed;
`


const EntryPanel: React.FC<PropsInterface> = props => {
  let { title, author, available } = props
  return(
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      {available?
      <Button>Borrow It!</Button> :
      <DisabledBtn>Unavailable</DisabledBtn>}
    </div>
  )
}

export default EntryPanel
