import React, {Component} from 'react'
import './assets/css/Sidebar.scss'
import list from '../list.json'
import Inside from "./Inside";
import { ThemeContextConsumer } from './ThemeContext'

class Sidebar extends Component {
    state = {
        id: 0,
        isActive: false,
    }

    deep = () => {
        this.setState((state) => ({ isActive: !state.isActive }))
    }

    render() {
        const inside = this.state.isActive && <Inside id={this.state.id} />
        return (
            <ThemeContextConsumer>
                {context => (
                   <div className={`sidebar sidebar_${context.theme}`}>
                    <div className="container">
                      <button className={"button__start"} onClick={this.deep}>{list[this.state.id].name}</button>
                        <div>{inside}</div>
                    </div>
                </div>
                )}
            </ThemeContextConsumer>
        )
    }
}


export default Sidebar