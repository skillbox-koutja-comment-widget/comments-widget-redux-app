export const CHANGE_PROP_NEW_COMMENT = 'CHANGE_PROP_NEW_COMMENT';
export const RESET_NEW_COMMENT = 'RESET_NEW_COMMENT';

export function propChange(props) {
  return dispatch => {
    dispatch({
      type: CHANGE_PROP_NEW_COMMENT,
      payload: props,
    });
  };
}

export function resetNewComment() {
  return dispatch => {
    dispatch({
      type: RESET_NEW_COMMENT,
    });
  };
}
