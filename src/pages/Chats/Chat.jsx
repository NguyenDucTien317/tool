import { Box } from '@mui/material'
import Conversation from './Conversations/Conversation'
import Grid from '@mui/material/Grid'
import bgImage from '../../assets/auth/login-register-bg.jpg'
function Chat() {
  return (
    <Box
      sx={{
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.2)'
      }}
    >
      <Box
        sx={{
          padding: 3,
          height: '100vh'
        }}
      >
        <Grid
          container
          sx={{
            height: '100%',
            borderRadius: '20px',
            padding: 3,
            position: 'relative',
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(245, 245, 245 , 0.9)'
                : 'rgba(0, 0, 0 ,0.8)'
          }}
        >
          <Grid
            sx={{
              position: 'sticky',
              height: '100%',
              paddingLeft: 1
            }}
            item
            xs={12}
            sm={12}
            md={12}
          >
            <Conversation />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Chat
