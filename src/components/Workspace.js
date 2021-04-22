import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        "Classic": { fs: '', bg: '', cl: '', fw: '', text: '' },
        "Waves": { fs: '', bg: '', cl: '', fw: '', text: '' },
        "Card": { fs: '', bg: '', cl: '', fw: '', text: '', bw: '', bc: '' },
    }

    render() {
        const {themeContext, userComponentName} = this.props;
        const Component = components[userComponentName];

        const componentText = userComponentName && this.state[userComponentName].text;
        const componentStyle = this.state[userComponentName];
        const className = this.buildClassName(userComponentName);
        const currentComponent = userComponentName && <Component className={className}>
                                                            {componentText}
                                                      </Component>;

        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles}
                                                                componentStyle={componentStyle}
                                                                componentName={userComponentName}
                                                                className={className}
                                                                componentText={componentText}/>;
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
        let styleObj = this.state[componentName]

        for (let style in styleObj) {
            if (style !== 'text' && styleObj.hasOwnProperty(style) && styleObj[style] !== '') {
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