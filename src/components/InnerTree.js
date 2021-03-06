import React, {Component} from 'react'
import list from '../list.json'
import './assets/css/InnerTree.scss'

class InnerTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id + 1,
            isActive: false
        }
    }

    render () {
        const listPosition = list[this.props.id];
        const innerTree = this.state.isActive && <InnerTree id={this.state.id}/>

        const dirElement = listPosition.dirs.map((dir, index) => (
            <button className={"tree-element__dir"}
                    key={index}
                    onClick={this.goDown}>
                {dir}
            </button>
        ));

        const fileElement = listPosition.files.map((file, index) => (
            <button className={"tree-element__file"}
                    key={index}>
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
}

export default InnerTree;