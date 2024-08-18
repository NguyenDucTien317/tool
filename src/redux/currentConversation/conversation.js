import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '~/utils/axiosInstance'

const initialState = {
  currentConversation: [
    {
      id_user: 2,
      content: 'Xin chào,tôi có thể giúp được gì cho bạn!',
      type: 'text'
    }
  ]
}

export const sendMessageAPI = createAsyncThunk(
  'conversation/sendMessageAPI',
  async (question) => {
    const response = await axiosInstance.post('http://127.0.0.1:5000/ask', {
      question: question
    })
    return response.data
  }
)

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    sendNewMessage: (state, action) => {
      const message = {
        id_user: 1,
        content: action.payload,
        type: 'text'
      }
      state.currentConversation.push(message)
    },
    addMessageClone: (state) => {
      const message = {
        id_user: 2,
        content: '.....',
        type: 'text',
        system: true
      }
      state.currentConversation.push(message)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessageAPI.fulfilled, (state, action) => {
      state.currentConversation = state.currentConversation.filter(
        (message) => message.system !== true
      )
      const response = {
        id_user: 2,
        content: action.payload.response,
        type: 'text'
      }
      state.currentConversation.push(response)
    })
  }
})

export const selectCurrentConversation = (state) => {
  return state.conversation.currentConversation
}

export const {
  sendNewMessage,
  fetchConversation,
  addMessageClone,
  removeCloneMessage
} = conversationSlice.actions

export const conversationReducer = conversationSlice.reducer
