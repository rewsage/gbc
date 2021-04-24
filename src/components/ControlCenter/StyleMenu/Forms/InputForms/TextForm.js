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

    static getDerivedStateFromProps(props, state) {
        const {componentStyle, styleType} = props;

        if (componentStyle[styleType] !== state.value) {
            return { value: componentStyle[styleType] }
        }

        return null;
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
        getStyles(styleType, event.target.value);
    }
}

export default TextForm;
