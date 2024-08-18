import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import SettingsIcon from '@mui/icons-material/Settings'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import ModalSetting from '~/components/ModalSetting/ModalSetting'
import { useState } from 'react'
function ConversationBar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  }))

  const [openModalSetting, setOpenModalSetting] = useState(false)

  const handleCloseModalSetting = () => {
    setOpenModalSetting(false)
  }

  return (
    <Box>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={8}>
          <Grid
            container
            alignItems="center"
            justifyContent="start"
            spacing={1}
          >
            <Grid item>
              <Stack direction="row" spacing={2}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar
                    sx={{ ':hover': { cursor: 'pointer' } }}
                    alt="Remy Sharp"
                  />
                </StyledBadge>
              </Stack>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                AI Consultation Travel
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container alignItems="center" justifyContent="end">
            <Grid item>
              <Tooltip arrow title="Start calling">
                <SettingsIcon
                  className="icon"
                  onClick={() => {
                    setOpenModalSetting(true)
                  }}
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ModalSetting
        open={openModalSetting}
        handleClose={handleCloseModalSetting}
      />
    </Box>
  )
}

export default ConversationBar
