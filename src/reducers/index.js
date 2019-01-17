import { combineReducers } from 'redux'
import { commentsReducer } from './comments'

export const rootReducer = combineReducers({
  comments: commentsReducer,
})
