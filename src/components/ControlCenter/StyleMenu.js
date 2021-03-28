import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import DropdownMenu from "./DropdownMenu";
import InputForm from "./InputForm";

class StyleMenu extends Component {
    render () {
        const {getStyles} = this.props;
        const fontWeight = ["Light", "Regular", "Bold"]

        return (
            <div className="control-menu">
                <InputForm label={"Font Size"}
                           styleType={'fs'}
                           getStyles={getStyles}/>
                <DropdownMenu label={"Font weight"}
                              elements={fontWeight}
                              styleType={'fw'}
                              getStyles={getStyles}/>
                <InputForm label={"Background Color"}
                           styleType={'bg'}
                           getStyles={getStyles}/>
                <InputForm label={"Color"}
                           styleType={'cl'}
                           getStyles={getStyles}/>
                <InputForm label={"Text"}
                           styleType={'text'}
                           getStyles={getStyles}/>
            </div>
        )
    }
}

export default StyleMenu;
