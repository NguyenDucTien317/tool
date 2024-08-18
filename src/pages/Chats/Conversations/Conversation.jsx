import ConversationBar from './ConversationBar/ConversationBar'
import ConversationHistory from './ConversationHistory/ConversationHistory'
import MessageBox from './MessageBox/MessageBox'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
function Conversation() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto'
        }}
      >
        <ConversationBar />
        <Divider sx={{ marginTop: 1 }} />
      </Box>

      <Box
        sx={{
          flex: '1 1 auto',
          overflowY: 'auto'
        }}
      >
        <ConversationHistory />
      </Box>

      <Box
        sx={{
          flex: '0 0 auto'
        }}
      >
        <MessageBox />
      </Box>
    </Box>
  )
}

export default Conversation
