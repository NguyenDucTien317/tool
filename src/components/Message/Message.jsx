import Box from '@mui/material/Box'
import { grey, orange } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
function Message({ message }) {
  return (
    <Box
      sx={{
        marginBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: message.id_user === 1 ? 'end' : 'start'
      }}
    >
      {message.id_user !== 1 && (
        <Avatar sx={{ width: '20px', height: '20px', marginRight: 1 }} />
      )}
      <Typography
        sx={{
          backgroundColor:
            message.id_user === 1
              ? orange[600]
              : (theme) =>
                  theme.palette.mode === 'light' ? grey[100] : grey[700],
          padding: '7px 15px',
          borderRadius: '30px'
        }}
      >
        {message.content}
      </Typography>
    </Box>
  )
}

export default Message
