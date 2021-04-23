import React from 'react'
import {render} from 'react-dom'
import './index.scss'
import App from './components/App'
import {ThemeContextProvider} from './components/ThemeControl/ThemeContext'

render(
    <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>,
    document.getElementById('root')
);