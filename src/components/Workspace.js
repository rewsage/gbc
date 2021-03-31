import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        "Waves": {
            fs: "18",
            fw: "400",
            bg: "#fff",
            cl: "#000"
        },
        "Classic": {
            fs: "18",
            fw: "400",
            bg: "#000",
            cl: "#fff"
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userComponentName !== this.props.userComponentName) {
            this.setStyle(prevProps.userComponentName, this.state[prevProps.userComponentName]);
        }
    }

    render() {
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        const Component = components[userComponentName];
        const className = this.buildClassName(userComponentName);
        const currentComponent = userComponentName && <Component className={className}>
                                                            {this.state.text}
                                                      </Component>;

        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles}
                                                                componentName={userComponentName}
                                                                fullClassName={className}/>;
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
        const {userComponentName} = this.props;
        let updatedObj = this.state[userComponentName];
        updatedObj[styleType] = value

        this.setState({
            [userComponentName]: updatedObj
        })
    }

    buildClassName = (componentName) => {
        let className = '';

        for (let style in this.state[componentName]) {
            if (style !== 'text') {
                className += `${style}-${this.state[componentName][style]} `
            }
        }
        return className;
    }

    setStyle = (componentName, style) => {
        this.setState({[componentName]: style})
    }
}

export default Workspace;