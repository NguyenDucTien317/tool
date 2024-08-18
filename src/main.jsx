import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme.js'
import GlobalStyles from '@mui/material/GlobalStyles'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { grey, orange } from '@mui/material/colors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            '.icon': {
              color: orange[600],
              cursor: 'pointer',
              boxSizing: 'content-box',
              borderRadius: '50%',
              padding: '3px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'light' ? grey[400] : grey[800]
              }
            }
          })}
        />
        <App />
        <ToastContainer position="top-right" theme="colored" />
      </CssVarsProvider>
    </BrowserRouter>
  </Provider>
)
