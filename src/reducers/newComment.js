import {
    CHANGE_PROP_NEW_COMMENT,
    RESET_NEW_COMMENT,
} from '../actions/NewCommentActions';
import { stripHtmlFromText } from '../lib';

export const emptyComment = {
    id: null,
    author: '',
    text: '',
    agree: false,
    disabled: true,
};

const initialState = emptyComment;

const validate = state => {
    let { author, text, agree } = state;
    author = stripHtmlFromText(author);
    text = stripHtmlFromText(text);
    return !!(author.trim() && text.trim() && agree);
};
const updateComment = (state, props) => {
    const nextState = {
        ...state,
        ...props,
    };
    nextState.disabled = !validate(nextState);
    return nextState;
};

export function newCommentReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROP_NEW_COMMENT:
            return updateComment(state, action.payload);
        case RESET_NEW_COMMENT:
            return updateComment(state, emptyComment);
        default:
            return state;
    }
}
