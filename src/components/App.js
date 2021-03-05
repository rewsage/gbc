import React from 'react'
import './assets/css/App.scss'
import Sidebar from "./Sidebar"
import Header from "./Header";
import {ThemeContextConsumer} from "./ThemeContext";

function App() {
    return (
        <ThemeContextConsumer>
            {context => (
                <section className={`main main_${context.theme}`}>
                    <Header/>
                    <Sidebar/>
                </section>
            )}
        </ThemeContextConsumer>
    );
}

export default App