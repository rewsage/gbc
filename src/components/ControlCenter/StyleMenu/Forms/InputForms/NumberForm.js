import React, { Component } from 'react';

class NumberForm extends Component {
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
        const {label, styleType} = this.props;
        let minValue, placeholderValue = 0;

        // минимальное значение ширины компонента должно быть не меньше 80px
        if (styleType === 'wd') {
            placeholderValue = 80;
            minValue = 80;
        }

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper">
                    <input className="form__number"
                           type="number"
                           min={minValue}
                           placeholder={placeholderValue}
                           value={this.state.value}
                           onChange={this.handleChange}>
                    </input>
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

export default NumberForm;
