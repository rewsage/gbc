import React, { Component } from 'react';
import '../../assets/css/ControlCenter/InputForms.scss';
import DropdownForm from "./InputForms/DropdownForm";
import TextForm from "./InputForms/TextForm";
import NumberForm from "./InputForms/NumberForm";
import ColorForm from "./InputForms/ColorForm";

class StyleMenu extends Component {
    render () {
        const {getStyles} = this.props;
        const fontWeight = ["Light", "Regular", "Bold"];
        const buttons = ["Classic", "Waves"]
        let numberForm = <NumberForm label={"Font Size"}
                                     key={"Font Size"}
                                     styleType={'fs'}
                                     getStyles={getStyles}/>;
        let colorBg = <ColorForm label={"Background"}
                                 key={"Background"}
                                 styleType={'bg'}
                                 getStyles={getStyles}/>;
        let color = <ColorForm label={"Color"}
                               key={"Color"}
                               styleType={'cl'}
                               getStyles={getStyles}/>;
        let borderWidth  = <NumberForm label={"Border Width"}
                                       key={"Border Width"}
                                       styleType={'bw'}
                                       getStyles={getStyles}/>;
        let borderColor = <ColorForm label={"Border Color"}
                                     key={"Border Color"}
                                     styleType={'bc'}
                                     getStyles={getStyles}/>;

        let dropdownForm = <DropdownForm label={"Font weight"}
                                         key={"Font weight"}
                                         elements={fontWeight}
                                         styleType={'fw'}
                                         getStyles={getStyles}/>;
        let textForm = <TextForm label={"Text"}
                                 key={"Text"}
                                 styleType={'text'}
                                 getStyles={getStyles}/>;
        let callButton = <DropdownForm label={"Button"}
                                       key={"Button"}
                                       elements={buttons}
                                       styleType={'bt'}
                                       getStyles={getStyles}/>;
        let url = <TextForm label={"url"}
                            key={"url"}
                            styleType={'url'}
                            getStyles={getStyles}/>;

        const formList = {"Classic": [numberForm, colorBg, color, dropdownForm, textForm],
                          "Waves": [numberForm, colorBg, color, dropdownForm, textForm],
                          "Card": [url, numberForm, colorBg, color, dropdownForm, textForm, borderWidth, borderColor, callButton]};

        return (
            <div className="control-menu">
                {formList[this.props.componentName]}
            </div>
        )
    }
}

export default StyleMenu;
