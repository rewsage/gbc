import React, {Component} from 'react'
import './assets/css/Sidebar.scss'
import list from '../list.json'
import InnerTree from "./InnerTree";
import { ThemeContextConsumer } from './ThemeContext'

class Sidebar extends Component {
    state = {
        id: 0,
        isActive: false,
    }

    render() {
        const innerTree = this.state.isActive && <InnerTree id={this.state.id}/>

        return (
            <ThemeContextConsumer>
                {context => (
                   <div className={`sidebar sidebar_${context.theme}`}>
                        <div className="container">
                            <button className={"tree-element__dir tree-element__dir_root"} onClick={this.goDown}>{list[this.state.id].name}</button>
                            {innerTree}
                        </div>
                    </div>
                )}
            </ThemeContextConsumer>
        )
    }

    goDown = () => {
        this.setState((state) => ({ isActive: !state.isActive }))
    }
}


export default Sidebar