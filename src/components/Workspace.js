import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        styles: {},
    }

    render() {
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        const Component = components[userComponentName];
        const currentComponent = userComponentName &&
                                 <Component className={"cl-#33333 sz-small bg-#676767"}>{this.state.styles.text}</Component>;

        return (
            <div className={`workspace workspace_${themeContext}`}>
                <div className="workspace__inner">
                    <div className="workspace__content">
                        {currentComponent}
                    </div>
                    <ControlCenter returnStyles={this.getStyles}/>
                </div>
            </div>
        )
    }

    getStyles = (stylesObj) => {
        this.setState({
            styles: stylesObj,
        })
    }
}

export default Workspace;