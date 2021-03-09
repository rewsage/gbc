import React, {Component} from 'react'
import { fileIcon } from './InnerTree'

class FileTreeElement extends Component {
    state = {
        isCalled: false
    }

    render() {
        const {userComponent} = this.props;
        const fileName = this.props.file.slice(0, -3);
        const condition = userComponent === fileName;

        if (this.state.isCalled && !condition) {
            this.setState({
                isCalled: false
            })
        }

        return (
            <div className={`tree-element__highlighter tree-element__highlighter_${this.state.isCalled}`}>
                <button className={`tree-element__file tree-element__file_${this.state.isCalled}`}
                        key={this.props.index}
                        onClick={ this.changeCondition }>

                    {fileIcon}
                    {this.props.file}
              </button>
            </div>
        )
    }

    changeCondition = () => {
        const {pickComponent} = this.props;
        const fileName = this.props.file.slice(0, -3);

        pickComponent(fileName)

        this.setState({
            isCalled: !this.state.isCalled
        })
    }

}

export default FileTreeElement;