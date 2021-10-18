import { useMemo } from 'react'
import { DataGrid, GridRowData, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppDispatch, useAppSelector } from '../../../../appStore/hooks'
import { foundBooksSelector } from '../../../../slices/foundEntries/foundEntries'
import { BookInterface } from '../../../../constants/interface/bookSlice'
import { addBook } from '../../../../slices/books/booksSlice'
import Button from '@mui/material/Button'
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--seconday-color)',
          color: 'var(--main-font-color)',
        },
      },
    },
  },
})



const FoundEntries = () => {
  const dispatch = useAppDispatch()
  const handleClick = (entry: BookInterface) => {
    dispatch(addBook(entry))
  }
  const data = useAppSelector(foundBooksSelector)
  const rows: GridRowData[] = data.map ((item, idx) => {
    return { 
      'id': idx,
      'author': item.author,
      'title': item.title,
      'cover': item.image,
  }})

  const columns: GridColDef[] = useMemo(() =>[
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
        author,
        title,
        image: cover,
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
], [handleClick])

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
