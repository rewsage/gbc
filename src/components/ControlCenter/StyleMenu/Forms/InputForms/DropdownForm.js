import React, { Component } from 'react';

// форма - выпадающий список
class DropdownForm extends Component {
    // значение по умолчанию
    state = {
        value: 'Regular',
    }

    // метод жизненного цикла, позволяющий сбросить значение формы,
    // а также синхронизировать состояние формы со стилем компонента
    static getDerivedStateFromProps(props, state) {
        const {componentStyle, styleType} = props;

        // если стили были сброшены вручную (resetStyles),
        // то форма примет значения по умолчанию
        if (componentStyle[styleType] === '' && state.value !== 'Regular') {
            return { value: 'Regular' }
        // синхронизация значения формы и стиля компонента
        } else if (componentStyle[styleType] !== state.value && componentStyle[styleType] !== '') {
            return { value: componentStyle[styleType] }
        }

        // в ином случае оставить без изменений
        return null;
    }

    render () {
        const {label, elements} = this.props;

        // массив элементов выпадающего меню
        const optionList = elements.map((element, index) => {
           return <option value={element} key={index}>{element}</option>
        });

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper">
                    <select className="form__dropdown"
                            value={this.state.value}
                            onChange={this.handleChange}>
                        {optionList}
                    </select>
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

export default DropdownForm;
