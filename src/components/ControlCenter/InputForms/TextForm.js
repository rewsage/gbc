import React, { Component } from 'react';

class TextForm extends Component {
    state = {
        value: '',
    }

    componentDidMount() {
        const {componentStyle, styleType} = this.props;

        if (componentStyle[styleType] !== '') {
            this.setState({
                value: componentStyle[styleType],
            })
        }
    }

    render () {
        const {label} = this.props;

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper form__wrapper_long">
                    <textarea className="form__textarea"
                              value={this.state.value}
                              onChange={this.handleChange}>
                    </textarea>
                </div>
            </form>
        )
    }

    handleChange = (event) => {
        const {getStyles, styleType} = this.props;

        this.setState({
            value: event.target.value,
        }, () => {
            getStyles(styleType, this.state.value);
        });
    }
}

export default TextForm;
