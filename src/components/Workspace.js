import React from 'react';
import './assets/css/Workspace.scss'
import * as components from "./Tie"

class Workspace extends React.Component {
    render() {
        const {themeContext} = this.props;

        if (this.props.name !== "" && this.props.visibility) {
            const Component = components[this.props.name]
            return (
                <div className={`workspace workspace_${themeContext}`   }>
                    <Component />
                </div>
            )
        }
        else {
            return (
                <div className={`workspace workspace_${themeContext}`}>
                </div>
            )
        }
    };
}

export default Workspace;