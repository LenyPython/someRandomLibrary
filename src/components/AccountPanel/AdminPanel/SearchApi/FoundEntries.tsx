import { DataGrid, GridRowData, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppSelector } from '../../../../appStore/hooks'
import { foundBooksSelector } from '../../../../slices/foundEntries/foundEntries'
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
});



const FoundEntries = () => {
  const data = useAppSelector(foundBooksSelector)
  const handleClick =(  ) => {}
  const rows: GridRowData[] = data.map ((item, idx) => {
    return { 
      'id': idx,
      'author': item.author,
      'title': item.title,
      'cover': 'show img',
  }})
  const columns: GridColDef[] = [
  { field: 'author', flex: 1, headerName: 'Author', width: 150, editable: true },
  { field: 'title', flex: 1, headerName: 'Title', width: 150, editable: true},
  { field: 'cover', flex: 1, headerName: 'Cover', width: 150, editable: true},
  { field: 'btn', headerName: 'Add Entry', width: 100, editable: true,
    renderCell: () => (
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          size="small"
        >
          Add
        </Button>
    )
     }
];

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
