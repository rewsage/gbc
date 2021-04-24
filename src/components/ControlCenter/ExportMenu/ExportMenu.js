import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/ControlMenu.scss';
import Instruction from "./Instruction";

class ExportMenu extends Component {
    render () {
        const {componentName, componentStyle} = this.props;

        return (
            <div className="control-menu control-menu_export">
                <p className="control-menu__text">To import a component:</p>
                <Instruction id={"js"}
                             componentName={componentName}/>

                <p className="control-menu__text">Then you can use it:</p>
                <Instruction id={"html"}
                             componentName={componentName}
                             componentStyle={componentStyle}/>
            </div>
        )
    }
}

export default ExportMenu;
