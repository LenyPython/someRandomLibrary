import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from '../../appStore/hooks';
import { getSnackbarState, closeSnackbar } from '../../slices/components/components'

export default function PositionedSnackbar() {
  const { vertical, horizontal, open, alert, message  } = useAppSelector(getSnackbarState);
  const dispatch = useAppDispatch()
 
  const handleClose = () => {
    dispatch(closeSnackbar())
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical , horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        key={vertical + horizontal}
      >
       <Alert variant="outlined" severity={alert}>
         {message}
      </Alert>
      </Snackbar>
    </div>
  );
}

