import React, {Component} from 'react'
import './assets/css/Sidebar.scss'
import { ThemeContextConsumer } from './ThemeContext'

class Sidebar extends Component {
    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <div className={`sidebar sidebar_${context.theme}`}>
                        <div className="container">

                        </div>
                     </div>
                )}
            </ThemeContextConsumer>
        )
    }
}


export default Sidebar