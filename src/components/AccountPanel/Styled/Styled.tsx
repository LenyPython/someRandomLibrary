import styled from 'styled-components'


export const PanelGrid = styled.div`
  background: red;
  width: 100%;
  height: 100%;
  padding: 2em;
  display: grid;
  grid-template-columns: 150px 1fr;
`
export const List = styled.div`
width: 100%;
grid-column: 2;
`

export const StyledMenu = styled.div`
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
export const Button = styled.button`
  font-weight: bold;
  width: 90%;
  background: blue;
  border-radius: .4em;
  border: none;
  padding: .3em .6em;
  margin: .4em;
  color: white
`
