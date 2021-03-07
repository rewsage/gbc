import React from 'react'
import './assets/css/App.scss'
import Sidebar from "./Sidebar"
import Header from "./Header";
import {ThemeContextConsumer} from "./ThemeContext";
import Workspace from "./Workspace";

class App extends React.Component {
    state = {
        nameComponent: ""
    }
    setName = (name) => {
        this.setState({nameComponent: name})
    }
    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <section className={`main main_${context.theme}`}>
                        <Header/>
                        <Sidebar setName={this.setName}/>
                        <Workspace name={this.state.nameComponent}/>
                    </section>
                )}
            </ThemeContextConsumer>
        );
    }
}

export default App