import { DataGrid, GridRowData, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppDispatch, useAppSelector } from '../../../../appStore/hooks'
import { foundBooksSelector  } from '../../../../slices/foundEntries/foundEntries'
import { BookInterface } from '../../../../constants/interface/bookSlice'
import Button from '@mui/material/Button'
import type {} from '@mui/x-data-grid/themeAugmentation';
import {addToAdd} from '../../../../slices/requests/requestsSlice';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--secondary-color)',
          color: 'var(--main-font-color)',
        },
      },
    },
  },
})



const FoundEntries = () => {
  const dispatch = useAppDispatch()
  const handleClick = (entry: BookInterface) => {
    dispatch(addToAdd(entry))
  }
  const data = useAppSelector(foundBooksSelector)
  const rows: GridRowData[] = data.map ((item, idx) => {
    const authors = item.authors.join(' ')
    return { 
      'id': idx,
      'author': authors,
      'title': item.title,
      'cover': item.cover
  }})

  const columns: GridColDef[] = [
  { field: 'author', flex: 1, headerName: 'Author'},
  { field: 'title', flex: 1, headerName: 'Title' },
  { field: 'cover', flex: 1, headerName: 'Cover',
    renderCell: (params) => {
      return(
        <img src={params?.value?.toString()} width='200' alt='Cover img' />
      )
    }},
  { field: 'btn', headerName: 'Add Entry',
    renderCell: (params) => {
      const { author, title, cover } = params.row
      const data = {
        id: '',
        authors: [ author ],
        title,
        cover,
        available: true
      }
      return (
        <Button
          onClick={()=>handleClick(data)}
          variant="contained"
          color="primary"
          size="small"
        >
          Add
        </Button>
      )
    }
     }
]

  return (
    <div>
    <ThemeProvider theme={theme} >
      <DataGrid
        autoHeight
        disableColumnMenu
        disableColumnSelector
        disableColumnFilter
        hideFooter
        rows={rows}
        columns={columns} />
    </ThemeProvider>
    </div>
  )
}

export default FoundEntries
