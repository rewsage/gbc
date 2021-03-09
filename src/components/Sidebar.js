import React, {Component} from 'react'
import './assets/css/Sidebar.scss'
import list from '../list.json'
import { default as InnerTree, folderOpen, folderClose, arrowRight, arrowDown } from "./InnerTree";

class Sidebar extends Component {
    state = {
        id: 0,
        isActive: false
    }

    render() {
        const arrowIcon = this.isActive() ? arrowDown : arrowRight;
        const folderIcon = this.isActive() ? folderOpen : folderClose;
        const innerTree = this.isActive() && <InnerTree id={this.state.id}
                                                        pickComponent={this.props.pickComponent}
                                                        visibility={this.props.visibility}
                                                        userComponent={this.props.userComponent}/>

        return (
            <div className="sidebar">
                <div className="container">
                    <div className="sidebar__inner">
                        <div className="sidebar__dividing-line"></div>
                        <p className="sidebar__title">LIBRARY</p>

                        <div className="sidebar__wrapper">
                            <button className={"tree-element__dir tree-element__dir_root"} onClick={this.goDown}>
                                {arrowIcon}
                                {folderIcon}
                                {list[this.state.id].name}
                            </button>

                            {innerTree}
                        </div>
                    </div>
                </div>
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


export default Sidebar