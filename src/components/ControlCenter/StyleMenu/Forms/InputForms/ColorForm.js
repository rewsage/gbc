import React, { Component } from 'react';
import {ChromePicker} from "react-color";

// форма выбора цвета
class ColorForm extends Component {
    constructor(props) {
        super(props);

        // isOpen: открыта ли цветовая палитра?
        // color: выбранный на палитре цвет
        this.state = {
            isOpen: false,
            color: '#ec9360',
        };

        // создание рефа, который прикрепится к палитре и к самой форме
        this.toggleContainer = React.createRef();
    }

    // метод, вызывающийся сразу после рендера компонента
    // метод позволяет сохранить значение стиля формы после повторного монтирования StyleMenu
    componentDidMount() {
        const {componentStyle, styleType} = this.props;

        // если цвет уже был задан (до размонтирования), то форма примет его значение
        if (componentStyle[styleType] !== '') {
            this.setState({
                color: componentStyle[styleType],
            })
        }

        // обработчик событий дает возможность скрыть цветовую палитру при нажатии за её пределы
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    // удаляем обработчик, объявленный выше
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    // метод жизненного цикла, позволяющий сбросить значение формы
    static getDerivedStateFromProps(props, state) {
        const {componentStyle, styleType} = props;

        // если стили были сброшены вручную (resetStyles),
        // то форма примет значения по умолчанию
        if (componentStyle[styleType] === '' &&
            state.color !== '#ec9360' &&
            !state.isOpen
           ) {
            return {
                isOpen: false,
                color: '#ec9360',
            }
        }

        // в ином случае оставить без изменений
        return null;
    }

    // при нажатии на форму открывает или закрывает цветовую палитру
    onClickHandler = () => {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // если нажатие произведено вне цветовой палитры, то она будет закрыта
    onClickOutsideHandler = (event) => {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        const {label} = this.props;
        // отображать или скрыть цветовую палитру
        const colorPicker = this.isOpen() && <ChromePicker color={ this.state.color }
                                                           onChange={ this.handleChange }
                                                           disableAlpha={true}/>;

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper" ref={this.toggleContainer}>
                   <button className="form__color-btn"
                          type="button"
                          onClick={this.onClickHandler}>
                       <div style={{background: this.state.color}}/>
                       <p>{this.state.color}</p>
                    </button>

                    <div className="form__color-picker">
                        {colorPicker}
                    </div>
                </div>
            </form>
        );
    }

    // обрабатывает изменение цвета и с помощью колбэка передает эти изменения
    handleChange = (color) => {
        const { styleType, getStyles } = this.props;

        this.setState({
            color: color.hex
        },() => {
            getStyles(styleType, this.state.color);
        });
    }

    isOpen = () => {
        return this.state.isOpen;
    }
}

export default ColorForm;
