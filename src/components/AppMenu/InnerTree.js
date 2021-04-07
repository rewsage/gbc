import React, {Component} from 'react'
import list from '../../list.json'
import '../../assets/css/App-menu/InnerTree.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faCaretRight, faCaretDown, faFileCode } from "@fortawesome/free-solid-svg-icons"
import FileBtn from "./FileBtn"
import ButtonDir from "./ButtonDir";

const folderOpen = <FontAwesomeIcon className="tree-element__icon tree-element__icon_folder" icon={faFolderOpen}/>
const folderClose = <FontAwesomeIcon className="tree-element__icon tree-element__icon_folder" icon={faFolder}/>
const arrowDown = <FontAwesomeIcon className="tree-element__icon" icon={faCaretDown}/>
const arrowRight = <FontAwesomeIcon className="tree-element__icon" icon={faCaretRight}/>
const fileIcon = <FontAwesomeIcon className="tree-element__icon tree-element__icon_file" icon={faFileCode}/>


class InnerTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render () {
        let indexDir;
        for (let index = 0; index < list.length; index++) {
            if (list[index].name === this.props.openDir) {
               indexDir = index;
            }
        }
        const currentDir = list[indexDir];

        const dirBtn = currentDir.dirs.map((dir, index) => (
            <ButtonDir key={index}
                       dirName={dir}
                       callComponent={this.props.callComponent}
                       userComponentName={this.props.userComponentName}/>
        ));

        const fileBtn = currentDir.files.map((file) => (
            <FileBtn key={file}
                    file={file}
                    callComponent={this.props.callComponent}
                    userComponentName={this.props.userComponentName}/>
        ));

        return (
            <div className="tree-element">
                {dirBtn}
                {fileBtn}
            </div>
        )
    }
}

export default InnerTree;
export { arrowRight, arrowDown, folderOpen, folderClose, fileIcon }