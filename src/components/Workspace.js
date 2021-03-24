import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../Hub"

class Workspace extends React.Component {
    render() {
        let str = '';
        const {themeContext} = this.props;
        const {userComponentName} = this.props;
        if (userComponentName !== "" && this.props.visibility) {
            const Component = components[userComponentName]
            return (
                <div className={`workspace workspace_${themeContext}`}>
                    <Component className={""}>Button</Component>
                </div>
            )
        } else {
            return (
                <div className={`workspace workspace_${themeContext}`}/>
            )
        }
    };
}

export default Workspace;