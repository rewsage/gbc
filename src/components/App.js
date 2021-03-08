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

    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <main className={`app app_${context.theme}`}>
                        <section className="app__menu">
                            <Header/>
                            <Sidebar setName={this.setName}/>
                        </section>
                        <Workspace name={this.state.nameComponent} themeContext={context.theme}/>
                    </main>
                )}
            </ThemeContextConsumer>
        );
    }

    setName = (name) => {
        this.setState({nameComponent: name})
    }
}

export default App