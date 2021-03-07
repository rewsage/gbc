import React from 'react';
import './assets/css/Workspace.scss'
import * as components from "./Tie"

class Workspace extends React.Component {
    render() {
        if (this.props.name !== "") {
            const Component = components[this.props.name]
            return (
                <div className={"workspace"}>
                    <Component />
                </div>
            )
        }
        else {
            return (
                <div className={"workspace"}>

                </div>
            )
        }
    };
}

export default Workspace;