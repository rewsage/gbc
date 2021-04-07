import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        "Cards": {},
        "Classic": {},
        "Waves": {},
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
                                                                fullClassName={className}
                                                                componentText={this.state.text}/>;
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
        this.setState({[styleType]: value})
    }

    buildClassName = (componentName) => {
        let className = '';
        let styleObj = this.state[componentName]

        for (let style in styleObj) {
            if (style !== 'text' && styleObj[style] !== '') {
                className += `${style}-${styleObj[style]} `
            }
        }

        console.log(this.state);
        return className.slice(0, -1);
    }

    setStyle = (componentName, style) => {
        this.setState({[componentName]: style})
    }
}

export default Workspace;