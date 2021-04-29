import React, { Component } from 'react';
import {ChromePicker} from "react-color";


class ColorForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            background: '#ec9360',
        };

        this.toggleContainer = React.createRef();
    }

    componentDidMount() {
        const {componentStyle, styleType} = this.props;

        if (componentStyle[styleType] !== '') {
            this.setState({
                background: componentStyle[styleType],
            })
        }

        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    static getDerivedStateFromProps(props, state) {
        const {componentStyle, styleType} = props;

        if (componentStyle[styleType] === '' &&
            state.background !== '#ec9360' &&
            !state.isOpen
           ) {
            return {
                isOpen: false,
                background: '#ec9360',
            }
        }

        return null;
    }

    onClickHandler = () => {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    onClickOutsideHandler = (event) => {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        const {label} = this.props;
        const colorPicker = this.isOpen() && <ChromePicker color={ this.state.background }
                                                           onChange={ this.handleChange }
                                                           disableAlpha={true}/>;

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper" ref={this.toggleContainer}>
                   <button className="form__color-btn"
                          type="button"
                          onClick={this.onClickHandler}>
                       <div style={{background: this.state.background}}/>
                       <p>{this.state.background}</p>
                    </button>

                    <div className="form__color-picker">
                        {colorPicker}
                    </div>
                </div>
            </form>
        );
    }

    handleChange = (color) => {
        const { styleType, getStyles } = this.props;

        this.setState({
            background: color.hex
        },() => {
            getStyles(styleType, this.state.background);
        });
    }

    isOpen = () => {
        return this.state.isOpen;
    }
}

export default ColorForm;
