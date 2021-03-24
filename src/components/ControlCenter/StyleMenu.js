import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import DropdownMenu from "./DropdownMenu";
import InputForm from "./InputForm";

class StyleMenu extends Component {
    state = {
        fontSize: '',
        fontWeight: '',
        bgColor: '',
        text: '',
    }

    render () {
        const fontSize = ["Small", "Medium", "Large"]
        const fontWeight = ["Light", "Regular", "Bold"]

        return (
            <div className="control-menu">
                <DropdownMenu label={"Font size"}
                              elements={fontSize}
                              returnValue={this.getFontSize}/>
                <DropdownMenu label={"Font weight"}
                              elements={fontWeight}
                              returnValue={this.getFontWeight}/>
                <InputForm label={"Background Color"}
                           returnValue={this.getBgColor}/>
                <InputForm label={"Text"}
                           returnValue={this.getText}/>
            </div>
        )
    }

    getFontSize = (value) => {
       this.setState({
           fontSize: value,
       })
    }

    getFontWeight = (value) => {
        this.setState({
            fontWeight: value,
        })
    }

    getBgColor = (value) => {
        this.setState({
            bgColor: value,
        })
    }

    getText = (value) => {
        this.setState({
            text: value,
        })
    }
}

export default StyleMenu;
