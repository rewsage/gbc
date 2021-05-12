import React, { Component } from 'react';

class TextForm extends Component {
    state = {
        value: '',
    }

    // метод жизненного цикла, позволяющий синхронизировать состояние формы со стилем компонента
    static getDerivedStateFromProps(props, state) {
        const {componentStyle, styleType} = props;

        // синхронизация значения формы и стиля компонента
        if (componentStyle[styleType] !== state.value) {
            return { value: componentStyle[styleType] }
        }

        // в ином случае оставить без изменений
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

    // метод передает изменения с помощью функции-колбэка
    handleChange = (event) => {
        const {getStyles, styleType} = this.props;
        getStyles(styleType, event.target.value);
    }
}

export default TextForm;
