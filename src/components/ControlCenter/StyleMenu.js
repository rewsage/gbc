import React, { Component } from 'react';
import '../../assets/css/ControlCenter/InputForms.scss';
import DropdownForm from "./InputForms/DropdownForm";
import TextForm from "./InputForms/TextForm";
import NumberForm from "./InputForms/NumberForm";
import ColorForm from "./InputForms/ColorForm";

class StyleMenu extends Component {
    render () {
        const {getStyles} = this.props;
        const fontWeight = ["Light", "Regular", "Bold"]

        return (
            <div className="control-menu">
                <NumberForm label={"Font Size"}
                            styleType={'fs'}
                            getStyles={getStyles}/>
                <ColorForm label={"Background"}
                           styleType={'bg'}
                           getStyles={getStyles}/>
                <ColorForm label={"Color"}
                           styleType={'cl'}
                           getStyles={getStyles}/>
                <DropdownForm label={"Font weight"}
                              elements={fontWeight}
                              styleType={'fw'}
                              getStyles={getStyles}/>
                <TextForm label={"Text"}
                          styleType={'text'}
                          getStyles={getStyles}/>
            </div>
        )
    }
}

export default StyleMenu;
