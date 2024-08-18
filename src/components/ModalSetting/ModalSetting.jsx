import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ModeSelected from './ModeSelected/ModeSelected'
import { red } from '@mui/material/colors'
import CloseIcon from '@mui/icons-material/Close'
function ModalSetting({ open, handleClose }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '10px'
  }

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Settings
            </Typography>
            <CloseIcon
              onClick={handleClose}
              fontSize="small"
              sx={{
                backgroundColor: red[600],
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer'
              }}
            />
          </Box>

          <Box marginTop={2}>
            <Box>
              <ModeSelected />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default ModalSetting
