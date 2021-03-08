import React from 'react'
import './assets/css/App.scss'
import Sidebar from "./Sidebar"
import Header from "./Header";
import {ThemeContextConsumer} from "./ThemeContext";
import Workspace from "./Workspace";

class App extends React.Component {
    state = {
        userComponent: "",
        visibility: false,
    }

    bringComponent = (name) => {
        if (name === this.state.userComponent) {
            this.setState((state) => ({visibility: !state.visibility}))
        }
        else {
            this.setState({
                userComponent: name,
                visibility: true
            })
        }
    }

    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <section className={`main main_${context.theme}`}>
                        <Header/>
                        <Sidebar bringComponent={this.bringComponent}/>
                        <Workspace name={this.state.userComponent} visibility={this.state.visibility}/>
                    </section>
                )}
            </ThemeContextConsumer>
        );
    }
}

export default App