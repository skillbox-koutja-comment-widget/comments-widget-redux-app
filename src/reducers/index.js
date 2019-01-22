import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { newCommentReducer } from './newComment';

export const rootReducer = combineReducers({
    comments: commentsReducer,
    newComment: newCommentReducer,
});
