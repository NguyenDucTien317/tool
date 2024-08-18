import SendIcon from '@mui/icons-material/Send'
import { Tooltip } from '@mui/material'
function SendButton({ sendMessage }) {
  return (
    <Tooltip title="Press Enter to send" arrow placement="top">
      <SendIcon
        className="icon interceptor-loading"
        fontSize="small"
        onClick={sendMessage}
        sx={{
          marginLeft: '5px',
          '&:hover': {
            cursor: 'pointer'
          }
        }}
      />
    </Tooltip>
  )
}

export default SendButton
