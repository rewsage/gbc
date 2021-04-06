import React from "react";
import InnerTree from "./InnerTree";
import { arrowRight, arrowDown, folderOpen, folderClose } from "./InnerTree"

class ButtonDir extends React.Component {
    state = {
        id: this.props.id,
        isActive: false
    }

    render() {
        const dir = this.props.dirName;
        const arrowIcon = this.isActive() ? arrowDown : arrowRight;
        const folderIcon = this.isActive() ? folderOpen : folderClose;
        const innerTree = this.isActive() && <InnerTree openDir={this.props.dirName}
                                                            callComponent={this.props.callComponent}
                                                            userComponentName={this.props.userComponentName}/>

        return(
            <div>
                <button className={"tree-element__dir"}
                        key={dir}
                        onClick={this.goDown}>
                    <div className={`tree-element__highlighter tree-element__highlighter_disabled`}/>
                    {arrowIcon}
                    {folderIcon}
                    {dir}
                </button>
                {innerTree}
            </div>
        )
    }
    goDown = () => {
        this.setState((state) => ({ isActive: !state.isActive }))
    }

    isActive = () => {
        return this.state.isActive;
    }
}

export default ButtonDir;