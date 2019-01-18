import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
} from '../actions/CommentActions';

const initialState = {
  data: [],
  isLoading: false,
};

const saveComments = comments => {
  localStorage.setItem('comments', JSON.stringify(comments));
};

const addComment = (comment, state) => {
  const nextComments = [comment, ...state.data];
  saveComments(nextComments);
  return nextComments;
};

const removeComment = (removingComment, state) => {
  const newComments = state.data.filter(comment => {
    return comment.id !== removingComment.id;
  });
  saveComments(newComments);
  return newComments;
};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case ADD_COMMENT:
      return {
        ...state,
        data: addComment(action.payload, state),
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        data: removeComment(action.payload, state),
      };

    default:
      return state;
  }
}
