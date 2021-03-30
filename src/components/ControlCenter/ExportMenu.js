import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import {text} from "@fortawesome/fontawesome-svg-core";
import Instruction from "./Instruction";

class StyleMenu extends Component {
    render () {
        return (
            <div className="control-menu control-menu_export">
                <p>To import a component:</p>
                <Instruction text={'import Component from "a/b/c/hj"'} id={"js"} />
                <p>Then you can use it:</p>
                <Instruction text={'&ltComponent className="bg-red sz-small cl-blue" />'} id={"html"} />
            </div>
        )
    }
}

export default StyleMenu;
