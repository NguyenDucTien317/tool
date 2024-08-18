import Box from '@mui/material/Box'
import { FormControl, OutlinedInput } from '@mui/material'
import { orange } from '@mui/material/colors'
function TextField({ inputValue, handleInputChange }) {
  return (
    <Box>
      <FormControl fullWidth sx={{ position: 'relative' }}>
        <OutlinedInput
          multiline
          minRows={1}
          maxRows={5}
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            height: '100%',
            paddingBottom: '7px',
            fontFamily: 'Roboto,Noto Color Emoji',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: orange[600]
              }
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: orange[600]
            }
          }}
        />
      </FormControl>
    </Box>
  )
}

export default TextField
