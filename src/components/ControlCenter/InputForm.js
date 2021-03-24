import React, { Component } from 'react';

class InputForm extends Component {
    state = {
        value: '',
    }

    render () {
        const {label} = this.props;

        return (
            <form className="control-menu__form">
                <label className="control-menu__label">{label}</label>
                <input className="control-menu__input"
                       type="text"
                       value={this.state.value}
                       onChange={this.handleChange}>
                </input>
            </form>
        )
    }

    handleChange = (event) => {
        const {returnValue, styleType} = this.props;

        this.setState({
            value: event.target.value
        }, () => {
            returnValue(styleType, this.state.value);
        });
    }
}

export default InputForm;
