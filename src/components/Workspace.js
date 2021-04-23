import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        "Classic": { text: '', fs: '', bg: '', cl: '', fw: '', br: '' },
        "Waves": { text: '', fs: '', bg: '', cl: '', fw: '' },
        "Phone": { fs: '', bg: '', cl: '', fw: '', bw: '', bc: '', br: '' },
        "Login": { text: '', fs: '', cl: '', fw: '', bw: '', bc: '', type: 'Email' },
        "Entry": { text: '', bg: '', bw: '', bc: '', br: '', login: 'Email', btn: 'Classic' },
        "Card": { text: '', url: '', fs: '', bg: '', cl: '', fw: '', bw: '', bc: '', btn: 'Classic' },
    }

    render() {
        const {themeContext, userComponentName} = this.props;
        const componentText = userComponentName && this.state[userComponentName].text;
        const Component = components[userComponentName];
        const componentStyle = this.state[userComponentName];

        const currentComponent = userComponentName && <Component componentsState={this.state}
                                                                 componentName={userComponentName}>
                                                          {componentText}
                                                      </Component>

        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles}
                                                                componentStyle={componentStyle}
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
        let updatedObj = this.state[userComponentName];
        updatedObj[styleType] = value

        this.setState({
            [userComponentName]: updatedObj
        })
    }
}

export default Workspace;