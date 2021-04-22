import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        "Classic": { fs: '', bg: '', cl: '', fw: '', text: '' },
        "Waves": { fs: '', bg: '', cl: '', fw: '', text: '' },
        "Card": { fs: '', bg: '', cl: '', fw: '', text: '', bw: '', bc: '' },
        "Phone": {},
        ClassicClass: "fs-18 fw-400 bg-#EC9360 cl-#424242 ",
        WavesClass: "fs-18 fw-400 bg-#F2C94C cl-#333333 ",
    }

    render() {
        const {themeContext, userComponentName} = this.props;
        const componentText = userComponentName && this.state[userComponentName].text;
        const Component = components[userComponentName];

        const componentStyle = this.state[userComponentName];
        const className = this.buildClassName(userComponentName);

        let buttonClass = {};
        if (userComponentName === "Card") {
            buttonClass["Classic"] = {"class": this.state.ClassicClass,
                                      "text": this.state.Classic.text};
            buttonClass["Waves"] = {"class": this.state.WavesClass,
                                    "text": this.state.Waves.text};
        }
        const currentComponent = userComponentName && <Component className={className}
                                                                 buttonClass={buttonClass}>
                                                          {componentText}
                                                      </Component>;

        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles}
                                                                componentStyle={componentStyle}
                                                                componentName={userComponentName}
                                                                className={className}
                                                                buttonClass={buttonClass}
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

        console.log(className);
        return className.slice(0, -1);
    }
}

export default Workspace;