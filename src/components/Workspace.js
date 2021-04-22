import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";

class Workspace extends React.Component {
    state = {
        "Waves": {
            fs: "18",
            fw: "400",
            bg: "#F2C94C",
            cl: "#333333",
        },
        "Classic": {
            fs: "18",
            fw: "400",
            bg: "#EC9360",
            cl: "#424242",
        },
        "Card": {
            fs: "18",
            fw: "400",
            bg: "#282C34",
            cl: "#CDCDCD",
            bw: 'medium',
            bc: '#EC9360'
        },
        "Phone": {
        },
        ClassicClass: "fs-18 fw-400 bg-#EC9360 cl-#424242 ",
        WavesClass: "fs-18 fw-400 bg-#F2C94C cl-#333333 "
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {userComponentName} = prevProps;
        if (userComponentName !== this.props.userComponentName) {
            if (userComponentName === "Classic" || userComponentName === "Waves") {
                this.setState({
                    [userComponentName + 'Class']: this.buildClassName(userComponentName)
                })
            }
        }
    }

    render() {
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        const componentText = userComponentName && this.state[userComponentName].text;
        const Component = components[userComponentName];
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
                                                                componentName={userComponentName}
                                                                fullClassName={className}
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

        for (let style in this.state[componentName]) {
            if (style !== 'text' && style !== "class") {
                className += `${style}-${this.state[componentName][style]} `
            }
        }
        return className;
    }
}

export default Workspace;