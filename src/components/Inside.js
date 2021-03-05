import React, {Component} from 'react'
import list from '../list.json'
import './assets/css/Inside.css'

class Inside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id + 1,
            isActive: false
        }
    }

    deep = () => {
        this.setState((state) => ({ isActive: !state.isActive }))
    }

    render () {
        const inside = this.state.isActive && <Inside id={this.state.id} />
        return (
            <div className={"buttons"}>
                <div>{list[this.props.id].dirs.map((dir, index) => (
                    <button className={"button__dir"} key={index} onClick={this.deep}>{dir}</button>
                ))}</div>
                <div>{inside}</div>
                <div>{list[this.props.id].files.map((file, index) => (
                    <button className={"button__file"} key={index}>{file}</button>
                ))}</div>
            </div>
        )
    }
}

export default Inside;