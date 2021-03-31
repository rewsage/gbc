import React, { Component } from 'react';
import {ChromePicker} from "react-color";


class ColorForm extends Component {
    state = {
        isActive: false,
        background: '#ec9360',
    };

    render() {
        const {label} = this.props;
        const colorPicker = this.isActive() && <ChromePicker color={ this.state.background }
                                                             onChange={ this.handleChange }
                                                             disableAlpha={true}/>;

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper">
                   <button className="form__color-btn"
                          type="button"
                          onClick={this.handleClick}>
                       <div style={{background: this.state.background}}/>
                       <p>{this.state.background}</p>
                    </button>

                    <div className="form__color-form">
                        {colorPicker}
                    </div>
                </div>
            </form>
        );
    }

    handleChange = (color) => {
        const { styleType, getStyles } = this.props;

        this.setState({ background: color.hex });
        getStyles(styleType, this.state.background);
    }

    handleClick = () => {
        this.setState({ isActive: !this.isActive() })
    }

    isActive = () => {
        return this.state.isActive;
    }
}

export default ColorForm;
