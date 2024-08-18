import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { orange } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'
function ModeSelected() {
  const { mode, setMode } = useColorScheme()

  const handleChangeMode = (event) => {
    setMode(event.target.value)
  }

  return (
    <Box>
      <TextField
        value={mode}
        onChange={handleChangeMode}
        select
        label="Theme"
        InputLabelProps={{
          sx: {
            '&.Mui-focused': {
              color: orange[600]
            }
          }
        }}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: orange[600]
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: orange[600]
            }
          }
        }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </TextField>
    </Box>
  )
}

export default ModeSelected
