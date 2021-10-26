import { 
  useAppSelector,
  useAppDispatch
}from '../../../appStore/hooks'
import { 
  getRequests,
  removeToAdd,
  removeToDelete
} from '../../../slices/requests/requestsSlice'
import { 
  List,
  Button,
  Container
} from '../../Styled/Styled'

const Requests = () => {
  const requests = useAppSelector(getRequests)
  const dispatch = useAppDispatch()
  const handleRemoveReq = (idx: number, cmd: 'add' | 'del'): void => {
    if(cmd === 'add') dispatch(removeToAdd(idx))
    else dispatch(removeToDelete(idx))
    
  }
  const toDelete = requests.toDelete.map((item, idx)=> {
    return <div key={item.ISBN + item.title + idx}>{`ISBN: ${item.ISBN||'none'}, 
      Title: ${item.title},
      authors: ${item.authors.join(' ')}`}
      <br />
      <Button onClick={()=>handleRemoveReq(idx, 'del')}>Remove Request</Button>
      </div>
  } )
  const toAdd = requests.toAdd.map((item, idx) => {
    return <div key={item.ISBN + item.title + idx}>{`ISBN: ${item.ISBN||'none'},
      Title: ${item.title},
      authors: ${item.authors.join(' ')}`}
      <br />
      <Button onClick={()=>handleRemoveReq(idx, 'add')}>Remove Request</Button>
      </div>
  } )
  return(
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
  )
}

export default Requests
