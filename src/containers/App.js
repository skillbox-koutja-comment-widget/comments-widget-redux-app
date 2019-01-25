import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Add from './Add';
import { Comments } from '../components/Comments';
import {
    getComments,
    addComment,
    removeComment,
} from '../actions/CommentActions';
import { resetNewComment } from '../actions/NewCommentActions';
import './App.css';

class App extends Component {
    render() {
        const {
            comments,
            newComment,
            addCommentAction,
            removeCommentAction,
        } = this.props;
        return (
            <React.Fragment>
                <Add
                    author={newComment.author}
                    text={newComment.text}
                    agree={newComment.agree}
                    disabled={newComment.disabled}
                    addCommentAction={addCommentAction}
                />
                <h3>Комментарии</h3>
                {comments.isLoading && <p>Загружаю...</p>}
                {Array.isArray(comments.data) && (
                    <Comments
                        onRemoveComment={removeCommentAction}
                        data={comments.data}
                    />
                )}
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.getCommentsAction();
    }
}

App.propTypes = {
    getCommentsAction: PropTypes.func.isRequired,
    addCommentAction: PropTypes.func.isRequired,
    removeCommentAction: PropTypes.func.isRequired,
};

// приклеиваем данные из store
const mapStateToProps = store => {
    return {
        comments: store.comments,
        newComment: store.newComment,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCommentsAction: () => dispatch(getComments()),
        addCommentAction: comment => {
            dispatch(addComment(comment));
            dispatch(resetNewComment());
        },
        removeCommentAction: comment => dispatch(removeComment(comment)),
    };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
