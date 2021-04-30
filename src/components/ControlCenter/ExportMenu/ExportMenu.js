import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/ControlMenu.scss'
import Import from "./Import";
import Tag from "./Tag";

// ExportMenu отвечает за меню,
// из которого можно осуществить экспорт стилизованного компонента
class ExportMenu extends Component {
    render () {
        const {componentName, componentsState} = this.props;

        return (
            <div className="control-menu">
                <div className="control-menu__inner control-menu__inner_export">
                    <p className="control-menu__text">To import a component:</p>
                    <Import componentName={componentName}/>
                    
                    <p className="control-menu__text">Then you can use it:</p>
                    <Tag componentName={componentName} componentsState={componentsState}/>
                </div>
            </div>
        )
    }
}

export default ExportMenu;
