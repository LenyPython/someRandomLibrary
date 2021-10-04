import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Browse from './components/Browse/Browse'
import Footer from './components/Footer/Footer'
import AccountPanel from './components/AccountPanel/AccountPanel'
import { useAppSelector } from './appStore/hooks'
import { selectBooks } from './slices/books/booksSlice'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 90%;
  min-height: 100vh;
`

function App() {
  let bookList = useAppSelector(selectBooks)
  return (<>
    <Navigation />
      <Container role='main'>
      <Switch>
        <Route path='/browse'>
          <Browse bookList={bookList}/>
          </Route>
        <Route path='/account'>
          <AccountPanel bookList={bookList}/>
          </Route>
        <Route path='/home'>
          <Welcome />
          </Route>
        <Route path='/LenyPython/someRandomLibrary' exact>
          <Welcome />
          </Route>
        <Route path='/' exact>
          <Welcome />
          </Route>
        <Route path='*'>
          <h1>Error 404 route does not exist</h1>
          </Route>
      </Switch>
      </Container>
    <Footer />
  </>
         );
}

export default App;
