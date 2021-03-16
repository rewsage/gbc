import React, {Component} from 'react'
import { fileIcon } from './InnerTree'

class FileBtn extends Component {
    state = {
        isCalled: false,
    }

    render() {
        const condition = this.isCalled() ? 'active' : 'disabled';
        const { userComponentName } = this.props;
        const fileName = this.props.file.slice(0, -3);
        const isEqual = userComponentName === fileName;


        if (this.isCalled() && !isEqual) {
            this.setState({
                isCalled: false,
            })
        } else if (!this.isCalled() && isEqual) {
            this.setState({
                isCalled: true
            })
        }

        return (
            <button className="tree-element__file"
                    onClick={ this.displayComponent }>
                <div className={`tree-element__highlighter ${condition}`}/>
                {fileIcon}
                {this.props.file}
            </button>
        )
    }

    displayComponent = () => {
        const { callComponent } = this.props;
        const fileName = this.props.file.slice(0, -3);
        callComponent(fileName)

        this.setState({
            isCalled: !this.isCalled()
        })
    }

    isCalled = () => {
        return this.state.isCalled;
    }
}

export default FileBtn;