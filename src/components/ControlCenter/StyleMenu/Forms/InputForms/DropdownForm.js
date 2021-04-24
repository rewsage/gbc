import React, { Component } from 'react';

class DropdownForm extends Component {
    state = {
        value: 'Regular',
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

        if (componentStyle[styleType] === '' && state.value !== 'Regular') {
            return { value: 'Regular' }
        } else if (componentStyle[styleType] !== state.value && componentStyle[styleType] !== '') {
            return { value: componentStyle[styleType] }
        }

        return null;
    }

    render () {
        const {label, elements} = this.props;

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

    handleChange = (event) => {
        const {getStyles, styleType} = this.props;
        getStyles(styleType, event.target.value);
    }
}

export default DropdownForm;
