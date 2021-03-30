import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import {text} from "@fortawesome/fontawesome-svg-core";
import Instruction from "./Instruction";

class StyleMenu extends Component {
    render () {
        let componentName = this.props.componentName
        return (
            <div className="control-menu control-menu_export">
                <p>To import a component:</p>
                <Instruction text={'import ' + componentName + ' from "Library/Buttons/' + componentName + '"'} id={"js"} />
                <p>Then you can use it:</p>
                <Instruction text={"&lt" + componentName + ' className="' + this.props.fullClass + '" />'} id={"html"} />
            </div>
        )
    }
}

export default StyleMenu;
