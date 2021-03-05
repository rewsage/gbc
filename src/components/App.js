import React from 'react'
import {render} from 'react-dom'
import './assets/css/App.scss'
import Sidebar from "./Sidebar"
import Header from "./Header";

function App() {
    return (
        <section>
            <Header/>
            <Sidebar/>
        </section>
    );
}

render(<App/>, document.getElementById('root'));

export default App