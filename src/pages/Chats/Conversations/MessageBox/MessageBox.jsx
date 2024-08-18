import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from './TextField/TextField'
import SendButton from './SendButton/SendButton'
import {
  sendMessageAPI,
  sendNewMessage,
  addMessageClone
} from '~/redux/currentConversation/conversation'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
function MessageBox() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const sendMessage = () => {
    if (inputValue.trim() == '') {
      toast.error('Please fill this input !')
      return
    }
    dispatch(sendNewMessage(inputValue))
    dispatch(addMessageClone())
    dispatch(sendMessageAPI(inputValue))
    setInputValue('')
  }

  return (
    <Box>
      <Grid
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          position: 'relative'
        }}
        container
        alignItems="flex-end"
      >
        <Grid item sx={{ flexGrow: 1, flexBasis: '0' }}>
          <TextField
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        </Grid>

        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '8px'
          }}
        >
          {<SendButton sendMessage={sendMessage} />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MessageBox
