import React, {Component} from 'react'
import { fileIcon } from './InnerTree'

class FileBtn extends Component {
    state = {
        isCalled: false,
    }

    render() {
        const { userComponentName, file } = this.props;
        const fileName = file.slice(0, -3);
        const isEqual = userComponentName === fileName;
        const highlightState = this.isCalled() && isEqual ? 'active' : 'disabled';

        return (
            <button className="tree-element__file"
                    onClick={ this.displayComponent }
                    onMouseOver={ this.eliminate }>
                <div className={`tree-element__highlighter tree-element__highlighter_${highlightState}`}/>
                    {fileIcon}
                <div className="tree-element__wrapper">
                    {this.props.file}
                </div>
            </button>
        )
    }

    displayComponent = () => {
        const { callComponent, file } = this.props;
        const fileName = file.slice(0, -3);
        callComponent(fileName)

        this.setState({
            isCalled: !this.isCalled()
        })
    }

    eliminate = () => {
        this.setState({
            isCalled: !this.isCalled()
        })
    }

    isCalled = () => {
        return this.state.isCalled;
    }
}

export default FileBtn;