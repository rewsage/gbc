import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import Instruction from "./Instruction";
import StyleReader from "../../utils/StyleReader";

class StyleMenu extends Component {
    render () {
        const {componentName, fullClassName, componentText, buttonClass} = this.props;
        let additionText = '';
        let rightClass = fullClassName;
        if (componentName === "Card") {
            let styleReader = new StyleReader(fullClassName);
            let currentButton = styleReader.button;
            let url = styleReader.img;
            rightClass = fullClassName.replace(` url-${url}`, '');
            let urlProps = '';
            if (url !== '') {
                urlProps = `\nurl="${url}"`
            }
            additionText = `\nbtn="${buttonClass[currentButton]["class"]}"${urlProps}`
        }

        return (
            <div className="control-menu control-menu_export">
                <p className="control-menu__text">To import a component:</p>
                <Instruction id={"js"} componentName={componentName}/>

                <p className="control-menu__text">Then you can use it:</p>
                <Instruction id={"html"}
                             componentName={componentName}
                             fullClassName={rightClass}
                             additionText={additionText}
                             componentText={componentText}/>
            </div>
        )
    }
}

export default StyleMenu;
