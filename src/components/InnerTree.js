import React, {Component} from 'react'
import list from '../list.json'
import './assets/css/InnerTree.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faCaretRight, faCaretDown, faFileCode } from "@fortawesome/free-solid-svg-icons"

const folderOpen = <FontAwesomeIcon className="tree-element__icon tree-element__icon_folder" icon={faFolderOpen}/>
const folderClose = <FontAwesomeIcon className="tree-element__icon tree-element__icon_folder" icon={faFolder}/>
const arrowDown = <FontAwesomeIcon className="tree-element__icon" icon={faCaretDown}/>
const arrowRight = <FontAwesomeIcon className="tree-element__icon" icon={faCaretRight}/>
const fileIcon = <FontAwesomeIcon className="tree-element__icon" icon={faFileCode}/>


class InnerTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id + 1,
            isActive: false
        }
    }

    render () {
        const arrowIcon = this.isActive() ? arrowDown : arrowRight;
        const folderIcon = this.isActive() ? folderOpen : folderClose;
        const listPosition = list[this.props.id];
        const innerTree = this.isActive() && <InnerTree id={this.state.id} bringComponent={this.props.bringComponent}/>

        const dirElement = listPosition.dirs.map((dir, index) => (
            <button className={"tree-element__dir"}
                    key={index}
                    onClick={this.goDown}>
                {arrowIcon}
                {folderIcon}
                {dir}
            </button>
        ));

        const fileElement = listPosition.files.map((file, index) => (
            <button className={"tree-element__file"}
                    key={index}
                    onClick={() => {this.props.bringComponent(file.slice(0, -3))}}>
                {fileIcon}
                {file}
            </button>
        ));

        return (
            <div className="tree-element">
                {dirElement}
                {innerTree}
                {fileElement}
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

export default InnerTree;
export { arrowRight, arrowDown, folderOpen, folderClose }