import React, {Component} from 'react'
import { fileIcon } from './InnerTree'

class FileBtn extends Component {
    state = {
        isCalled: false,
    }

    static getDerivedStateFromProps(props, state) {
        const { userComponentName, file } = props;
        const fileName = file.slice(0, -3);
        const isEqual = userComponentName === fileName;

        if (state.isCalled && !isEqual) {
            return { isCalled: false }
        } else if (!state.isCalled && isEqual) {
            return { isCalled: true }
        }

        return null;
    }

    render() {
        const condition = this.isCalled() ? 'active' : 'disabled';

        return (
            <button className="tree-element__file"
                    onClick={ this.displayComponent }
                    onMouseOver={ this.eliminate }>
                <div className={`tree-element__highlighter tree-element__highlighter_${condition}`}/>
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