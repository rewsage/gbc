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
        let numberForm = <NumberForm label={"Font Size"}
                                     styleType={'fs'}
                                     getStyles={getStyles}/>;
        let colorBg = <ColorForm label={"Background"}
                                   styleType={'bg'}
                                   getStyles={getStyles}/>;
        let color = <ColorForm label={"Color"}
                               styleType={'bg'}
                               getStyles={getStyles}/>;
        let borderWidth  = <NumberForm label={"Border Width"}
                                 styleType={'bw'}
                                 getStyles={getStyles}/>;
        let borderColor = <ColorForm label={"Border Color"}
                                     styleType={'bc'}
                                     getStyles={getStyles}/>;

        let dropdownForm = <DropdownForm label={"Font weight"}
                                         elements={fontWeight}
                                         styleType={'fw'}
                                         getStyles={getStyles}/>;
        let textForm = <TextForm label={"Text"}
                                 styleType={'text'}
                                 getStyles={getStyles}/>;

        const formList = {"Classic": [numberForm, colorBg, color, dropdownForm, textForm],
                          "Waves": [numberForm, colorBg, color, dropdownForm, textForm],
                          "Card": [numberForm, colorBg, color, dropdownForm, textForm, borderWidth, borderColor]};

        return (
            <div className="control-menu">
                {formList[this.props.componentName]}
            </div>
        )
    }
}

export default StyleMenu;
