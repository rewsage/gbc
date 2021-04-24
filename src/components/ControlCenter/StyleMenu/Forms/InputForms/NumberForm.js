import React, { Component } from 'react';

class NumberForm extends Component {
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
        getStyles(styleType, event.target.value);
    }
}

export default NumberForm;
