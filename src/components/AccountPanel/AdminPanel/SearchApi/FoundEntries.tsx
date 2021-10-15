import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppSelector } from '../../../../appStore/hooks'
import { foundBooksSelector } from '../../../../slices/foundEntries/foundEntries'
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--seconday-color)',
          display: 'flex',
          color: 'var(--main-font-color)',
          minHeight: '300px'
        },
      },
    },
  },
});


const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Idx', width: 50 },
  { field: 'col2', headerName: 'Author', width: 150 },
  { field: 'col3', headerName: 'Title', width: 150 },
  { field: 'col4', headerName: 'Cover', width: 150 },
  { field: 'col5', headerName: 'Add Entry', width: 100 },
];

const FoundEntries = () => {
  const data = useAppSelector(foundBooksSelector)
  const rows: GridRowsProp = data.map ((item, idx) => {
    return { 
      'id': idx,
      'col1': idx,
      'col2': item.author,
      'col3': item.title,
      'col4': 'show img',
      'col5': <button>Add</button>}
  })

  return (
    <ThemeProvider theme={theme} >
      <DataGrid rows={rows} columns={columns} />
    </ThemeProvider>
  )
}

export default FoundEntries
