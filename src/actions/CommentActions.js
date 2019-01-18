export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function getComments() {
  return dispatch => {
    dispatch({
      type: GET_COMMENTS_REQUEST,
    })

    setTimeout(() => {
      let comments = localStorage.getItem('comments')
      comments = JSON.parse(comments) || []
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: comments.map(item => {
          item.date = new Date(item.date)
          return item
        }),
      })
    }, 1000)
  }
}

export function addComment(comment) {
  return dispatch => {
    dispatch({
      type: ADD_COMMENT,
      payload: comment,
    })
  }
}

export function removeComment(comment) {
  return dispatch => {
    dispatch({
      type: REMOVE_COMMENT,
      payload: comment,
    })
  }
}
