import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { conversationReducer } from './currentConversation/conversation'

const reducers = combineReducers({
  conversation: conversationReducer
})

export const store = configureStore({
  reducer: reducers
})
