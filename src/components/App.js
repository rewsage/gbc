import React, { Component } from 'react'
import '../assets/css/App.scss'
import Sidebar from "./AppMenu/Sidebar"
import Header from "./AppMenu/Header";
import ThemeContext from "./ThemeControl/ThemeContext";
import Workspace from "./Workspace";


class App extends Component {
    state = {
        userComponentName: "",
        theme: 'light',
    }

    render() {
        return (
            <ThemeContext.Provider value={ { theme: this.state.theme, toggleTheme: this.toggleTheme } }>
                <main className={`app app_${this.state.theme}`}>
                    <section className="app__menu">
                        <Header />
                        <Sidebar callComponent={this.callComponent}
                                 userComponentName={this.state.userComponentName}/>
                    </section>
                    <Workspace userComponentName={this.state.userComponentName}/>
                </main>
            </ThemeContext.Provider>
        );
    }

    callComponent = (name) => {
        if (name === this.state.userComponentName) {
            this.setState({
                userComponentName: "",
            })
        } else {
            this.setState({
                userComponentName: name,
            })
        }
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light',
        });
    }
}

export default App;