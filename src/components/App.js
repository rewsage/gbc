import React from 'react'
import '../assets/css/App.scss'
import Sidebar from "./AppMenu/Sidebar"
import Header from "./AppMenu/Header";
import {ThemeContextConsumer} from "./ThemeControl/ThemeContext";
import Workspace from "./Workspace";

class App extends React.Component {
    state = {
        userComponentName: "",
        visibility: false,
    }

    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <main className={`app app_${context.theme}`}>
                        <section className="app__menu">
                            <Header />
                            <Sidebar callComponent={this.callComponent}
                                     userComponentName={this.state.userComponentName}/>
                        </section>
                        <Workspace userComponentName={this.state.userComponentName}
                                   visibility={this.state.visibility}
                                   themeContext={context.theme}/>
                    </main>
                )}
            </ThemeContextConsumer>
        );
    }

    callComponent = (name) => {
        if (name === this.state.userComponentName) {
            this.setState((state) => ({visibility: !state.visibility}))
        }
        else {
            this.setState({
                userComponentName: name,
                visibility: true
            })
        }
    }
}

export default App