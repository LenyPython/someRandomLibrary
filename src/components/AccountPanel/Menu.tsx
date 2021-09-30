import styled from 'styled-components'

const StyledMenu = styled.div`
  box-sizing: border-box;
  grid-column: 1;
  background: lightblue;
  border-radius 10px;
  width: 100%;
  max-height: 200px;
  padding: .6em;
  text-align: center;
  p{
    margin: .3em auto;
  }
`
const Button = styled.button`
  font-weight: bold;
  background: blue;
  border-radius: .4em;
  border: none;
  padding: .3em .6em;
  margin: .4em;
  color: white
`

const Menu = () => {
  const handleAddRubish = () =>{
    console.log('rubbish')

  }
  return (
    <StyledMenu>
    <Button>Add entry</Button>
    <Button onClick={handleAddRubish}>Add rubbish</Button>

    </StyledMenu>
  )

}


export default Menu
