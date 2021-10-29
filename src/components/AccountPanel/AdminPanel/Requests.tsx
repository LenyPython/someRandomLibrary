import { 
  useAppSelector,
  useAppDispatch
}from '../../../appStore/hooks'
import { 
  getRequests,
  removeToAdd,
  removeToDelete
} from '../../../slices/requests/requestsSlice'
import { updateDataBase } from '../../../sagas/actions'
import { 
  List,
  Container
} from '../../Styled/Styled'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Requests = () => {
  const requests = useAppSelector(getRequests)
  const dispatch = useAppDispatch()
  const handleRemoveReq = (idx: string, cmd: 'add' | 'del'): void => {
    if(cmd === 'add') dispatch(removeToAdd(idx))
    else dispatch(removeToDelete(idx))
    
  }
  const handleSubmitRequests = () => {
    dispatch(updateDataBase(requests))
  }
  const toDelete = requests.toDelete.map(item=> {
    return <div key={item.id}>{`ISBN: ${item.ISBN||'none'}, 
      Title: ${item.title},
      authors: ${item.authors.join(' ')}`}
      <br />
      <Button 
      color="error"
      variant="outlined"
      onClick={()=>handleRemoveReq(item.id, 'del')}>Remove Request</Button>
      </div>
  } )
  const toAdd = requests.toAdd.map(item => {
    return <div key={item.authors.join('') + item.title + item.ISBN}>{`ISBN: ${item.ISBN||'none'},
      Title: ${item.title},
      authors: ${item.authors.join(' ')}`}
      <br />
      <Button 
      color="error"
      variant="outlined"
      onClick={()=>handleRemoveReq(item.id, 'add')}>Remove Request</Button>
      </div>
  } )
  return(
    <Box textAlign='center'>
      <Button 
        color="success"
        variant="contained"
        onClick={handleSubmitRequests}
        sx={{
          margin:"15px auto"
      }}> Make changes to DB</Button>
    <Container>
      <List>
        <h2>Books to Add</h2>
    {toAdd}
      </List>
      <List>
        <h2>Books to Delete</h2>
    {toDelete}
      </List><br />
    </Container>
    </Box>
  )
}

export default Requests
