import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        //do not touch
    }

    render() {
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        const Component = components[userComponentName];
        const className = this.buildClassName();
        const currentComponent = userComponentName && <Component className={className}>
                                                            {this.state.text}
                                                      </Component>;
        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles} componentName={userComponentName} fullClass={className}/>;
        return (
            <div className={`workspace workspace_${themeContext}`} key={userComponentName}>
                <div className="workspace__inner">
                    <div className="workspace__content">
                        {currentComponent}
                    </div>
                    {currentMenu}
                </div>
            </div>
        )
    }

    getStyles = (styleType, value) => {
        this.setState({[styleType]: value}, () => {
            console.log(this.state);
        })
    }

    buildClassName = () => {
        let className = '';

        for (let style in this.state) {
            if (style !== 'text' && style !== this.state.componentName) {
                className += `${style}-${this.state[style]} `
            }
        }

        return className;
    }
}

export default Workspace;