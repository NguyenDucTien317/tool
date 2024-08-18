import Box from '@mui/material/Box'
import Message from '~/components/Message/Message'
import { useSelector } from 'react-redux'
import { selectCurrentConversation } from '~/redux/currentConversation/conversation'
function ConversationHistory() {
  const messages = useSelector(selectCurrentConversation)
  return (
    <Box sx={{ marginRight: 1, marginTop: 1 }}>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </Box>
  )
}

export default ConversationHistory
