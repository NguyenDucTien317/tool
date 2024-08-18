import Chat from './pages/Chats/Chat'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
