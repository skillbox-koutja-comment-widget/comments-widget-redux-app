import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { propChange } from '../actions/NewCommentActions';

class Add extends Component {
    onBtnClickHandler = e => {
        e.preventDefault();
        const { name, text } = this.props;
        const date = new Date();
        this.props.addCommentAction({
            id: +date,
            author: name,
            text,
            date,
        });
    };

    handleChange = e => {
        const { id, value } = e.currentTarget;
        this.props.propChangeAction({
            [id]: value,
        });
    };

    handleCheckboxChange = e => {
        this.props.propChangeAction({
            agree: e.currentTarget.checked,
        });
    };

    render() {
        const { name, text, agree, disabled } = this.props;
        return (
            <form className="add">
                <input
                    id="name"
                    type="text"
                    onChange={this.handleChange}
                    className="add__author"
                    placeholder="Ваше имя"
                    value={name}
                />
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст комментария"
                    value={text}
                />
                <label className="add__checkrule">
                    <input
                        type="checkbox"
                        onChange={this.handleCheckboxChange}
                        checked={agree}
                    />
                    Я согласен с правилами
                </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={disabled}
                >
                    Добавить комментарий
                </button>
            </form>
        );
    }
}

Add.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    agree: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    addCommentAction: PropTypes.func.isRequired,
    propChangeAction: PropTypes.func.isRequired,
};

// приклеиваем данные из store
const mapStateToProps = store => {
    return {
        newComment: store.newComment,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        propChangeAction: props => dispatch(propChange(props)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);
