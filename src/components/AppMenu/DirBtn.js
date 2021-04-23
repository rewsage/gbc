import React from "react";
import InnerTree from "./InnerTree";
import { arrowRight, arrowDown, folderOpen, folderClose } from "./InnerTree"

class DirBtn extends React.Component {
    state = {
        id: this.props.id,
        isActive: false
    }

    render() {
        const {dirName, callComponent, userComponentName} = this.props;
        const arrowIcon = this.isActive() ? arrowDown : arrowRight;
        const folderIcon = this.isActive() ? folderOpen : folderClose;
        const innerTree = this.isActive() && <InnerTree openDir={dirName}
                                                        callComponent={callComponent}
                                                        userComponentName={userComponentName}/>

        return(
            <div>
                <button className={"tree-element__dir"}
                        key={dirName}
                        onClick={this.goDown}>
                    <div className={`tree-element__highlighter tree-element__highlighter_disabled`}/>
                    {arrowIcon}
                    {folderIcon}
                    {dirName}
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

export default DirBtn;