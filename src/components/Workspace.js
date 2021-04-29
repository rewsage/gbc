import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";
import ThemeContext from "./ThemeControl/ThemeContext";

class Workspace extends React.Component {
    state = {
        "Classic": { text: '', fs: '', bg: '', cl: '', fw: '', br: '' },
        "Waves": { text: '', fs: '', bg: '', bc: '', cl: '', fw: '' },
        "Phone": { fs: '', bg: '', cl: '', fw: '', bw: '', bc: '', br: '' },
        "Login": { text: '', fs: '', cl: '', fw: '', bw: '', bc: '', type: '' },
        "Entry": { text: '', bg: '', bw: '', bc: '', br: '', btn: '' },
        "Card": { text: '', url: '', fs: '', bg: '', cl: '', fw: '', bw: '', bc: '', btn: '' },
    }

    render() {
        const {userComponentName} = this.props;
        const themeContext = this.context.theme;

        const componentText = userComponentName && this.state[userComponentName].text;
        const Component = components[userComponentName];

        const currentComponent = userComponentName && <Component componentsState={this.state}
                                                                 componentName={userComponentName}>
                                                          {componentText}
                                                      </Component>

        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles}
                                                                resetStyles={this.resetStyles}
                                                                componentsState={this.state}
                                                                componentName={userComponentName}/>;

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
        const updatedObj = this.state[userComponentName];
        updatedObj[styleType] = value

        this.setState({
            [userComponentName]: updatedObj,
        })
    }

    resetStyles = () => {
        const {userComponentName} = this.props;
        const resetObj = this.state[userComponentName];
        const properties =  Object.keys(resetObj);

        properties.forEach(property => {
           resetObj[property] = '';
        });

        this.setState({
            [userComponentName]: resetObj,
        })

        console.log(this.state);
    }

    static contextType = ThemeContext;
}

export default Workspace;