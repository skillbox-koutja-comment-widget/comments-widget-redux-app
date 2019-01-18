import {
  CHANGE_PROP_NEW_COMMENT,
  RESET_NEW_COMMENT,
} from '../actions/NewCommentActions'

export const emptyComment = {
  id: null,
  name: '',
  text: '',
  agree: false,
  disabled: true,
}

// const initialState = {
//     name: 'Михаил',
//     text: 'Тест',
//     agree: true,
//     disabled: false,
// };
const initialState = emptyComment

const validate = state => {
  const { name, text, agree } = state
  return !!(name.trim() && text.trim() && agree)
}

const updateComment = (state, props) => {
  const nextState = {
    ...state,
    ...props,
  }

  nextState.disabled = !validate(nextState)
  return nextState
}

export function newCommentReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROP_NEW_COMMENT:
      return updateComment(state, action.payload)
    case RESET_NEW_COMMENT:
      return updateComment(state, emptyComment)

    default:
      return state
  }
}
