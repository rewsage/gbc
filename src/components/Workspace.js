import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        // sz: '',
        //do not touch
    }

    render() {
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        const Component = components[userComponentName];

        const currentComponent = userComponentName && <Component className={this.buildClassName()}>
                                                            {this.state.text}
                                                      </Component>;

        return (
            <div className={`workspace workspace_${themeContext}`}>
                <div className="workspace__inner">
                    <div className="workspace__content">
                        {currentComponent}
                    </div>
                    <ControlCenter getStyles={this.getStyles}/>
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
            className += `${style}-${this.state[style]} `
        }

        console.log(className)
        return className;
    }
}

export default Workspace;