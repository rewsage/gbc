import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import {text} from "@fortawesome/fontawesome-svg-core";
import Instruction from "./Instruction";

class StyleMenu extends Component {
    render () {
        const {componentName, fullClassName} = this.props;

        return (
            <div className="control-menu control-menu_export">
                <p className="control-menu__text">To import a component:</p>
                <Instruction text={'import ' + componentName + ' from "Library/Buttons/' + componentName + '"'} id={"js"} />
                <p className="control-menu__text">Then you can use it:</p>
                <Instruction text={"&lt" + componentName + ' className="' + fullClassName + '" />'} id={"html"} />
            </div>
        )
    }
}

export default StyleMenu;
