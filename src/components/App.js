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
    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <main className={`app app_${context.theme}`}>
                        <section className="app__menu">
                            <Header/>
                            <Sidebar bringComponent={this.bringComponent}/>
                        </section>
                        <Workspace name={this.state.userComponent}
                                   visibility={this.state.visibility}
                                   themeContext={context.theme}/>
                    </main>
                )}
            </ThemeContextConsumer>
        );
    }

    setName = (name) => {
        this.setState({nameComponent: name})
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
}

export default App