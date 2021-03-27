import React, { Component } from 'react';

class DropdownMenu extends Component {
    state = {
        value: '',
    }

    render () {
        const {label, elements} = this.props;

        const optionList = elements.map((element, index) => {
           return <option value={element} key={index}>{element}</option>
        });

        return (
            <form className="control-menu__form">
                <label className="control-menu__label">{label}</label>
                <select className="control-menu__dropdown"
                        value={this.state.value}
                        onChange={this.handleChange}>
                    {optionList}
                </select>
            </form>
        )
    }

    handleChange = (event) => {
        const {getStyles, styleType} = this.props;

        this.setState({
            value: event.target.value
        }, () => {
            getStyles(styleType, this.state.value);
        });
    }
}

export default DropdownMenu;
