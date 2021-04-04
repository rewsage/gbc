import React, { Component } from 'react';

class NumberForm extends Component {
    state = {
        value: '',
    }

    render () {
        const {label} = this.props;

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper">
                    <input className="form__number"
                           type="number"
                           min="0"
                           placeholder="18"
                           value={this.state.value}
                           onChange={this.handleChange}>
                    </input>
                </div>
            </form>
        )
    }

    handleChange = (event) => {
        const {getStyles, styleType} = this.props;

        this.setState({
            value: event.target.value
        }, () => {
            getStyles(styleType, this.state.value);
        });
    }
}

export default NumberForm;
