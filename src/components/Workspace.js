import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    render() {
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        const Component = components[userComponentName];
        const currentComponent = userComponentName &&
                                 <Component className={"cl-#33333 sz-small bg-#676767"}>Button</Component>;

        return (
            <div className={`workspace workspace_${themeContext}`}>
                <div className="workspace__inner">
                    <div className="workspace__content">
                        {currentComponent}
                    </div>
                    <ControlCenter/>
                </div>
            </div>
        )
    }
}

export default Workspace;